import { onElementReady } from "../../../../chill";
import { menuTemplate } from "../../menu/variables";
import {
  getModuleElements,
  filtersData,
  basicFilters,
  fliterTemplate,
} from "../variables";

const generateFilters = ({ module }) => {
  const dependencyMenu = module.querySelector(
    "[id^='menu_select_menu_dependency']"
  );

  const menuModule = dependencyMenu
    ? document.querySelector(`[data-module-id="${dependencyMenu.value}"]`)
    : null;

  if (menuModule) {
    const { filterContainer, saveFiltersBtn } = getModuleElements(module);
    // 1. Blur page
    document.body.classList.add("chill-is-working");

    // 2. If manu has notice message - remover it
    const noticeMsg = menuModule.querySelector(".notice-message");
    if (noticeMsg) {
      noticeMsg.remove();
    }
    // 3. Remove all categories
    const menuWrapper = menuModule.querySelector(".js-category-wrapper");
    const savedMenu = menuWrapper.innerHTML;
    menuWrapper.innerHTML = menuTemplate.emptyCategory;

    // 4. Save empty menu
    const saveMenuModuleBtn = menuModule.querySelector(".module__button_save");
    saveMenuModuleBtn.click();

    // 5. Generate new menu
    const generateFiltres = () => {
      // 5.1. Get all categories (menu is empty, so all categories are not assigned)
      menuModule.querySelector("#categories-btn").click();

      onElementReady(".missing-category", () => {
        // 5.2. When categories are loaded let categoriesList has assigned value.
        // get menu content back and save menu module

        menuWrapper.innerHTML = savedMenu;
        saveMenuModuleBtn.click();
        // 6. Add all filters for categoriesList
        // 6.1 Empty filterContainer
        filterContainer.innerHTML = "";
        // 6.2. Add filters

        const filtersToAdd = filtersData.filter((filter) => {
          const code = filter[1].substr(0, filter[1].indexOf(" "));

          return categoriesList.filter((category) => category.code === code)
            .length;
        });
        basicFilters.concat(filtersToAdd).forEach((el, i) => {
          filterContainer.insertAdjacentHTML(
            "beforeend",
            fliterTemplate(el[0], el[1], i)
          );
        });
        // 7. Save filters
        saveFiltersBtn.click();
        // 8. Reload page
        // const noticeMsg = module.querySelector(".notice-message");
        // if (noticeMsg) {
        //   noticeMsg.remove();
        // }
        // onElementReady(".notice-message", () => {
        //   location.reload();
        // });
      });
    };
    onElementReady(".notice-message", generateFiltres);
  } else {
    alert("CHILL: Aby wygenerować filtry, potrzebny jest moduł menu :)");
  }
};
export default generateFilters;
