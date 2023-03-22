import {
  getModuleElements,
  menuTemplate,
  menuCategories_newMenu,
  menuCategories,
} from "../variables";
import { onElementReady } from "../../../../chill";

const generateMenu = ({ module }) => {
  const { menuWrapper, saveModuleBtn, noticeMsg } = getModuleElements(module);
  const moduleId = module.dataset.moduleId;
  const minItemsQuantityInSubcategory = 4;
  const areAnimatedIcons = module.querySelector(
    "[for^=products_animated_icons] .input__checkbox:checked"
  );
  const allCategories = areAnimatedIcons
    ? menuCategories_newMenu
    : menuCategories;
  const maxProducts = module.querySelector(
    ".chill-maxProducts-input input"
  ).value;
  console.log(maxProducts);
  // 1. Blur page

  document.body.classList.add("chill-is-working");

  sessionStorage.setItem("menuSaved", menuWrapper.innerHTML);
  // 2. If menu has notice message - remover it

  if (noticeMsg) {
    noticeMsg.remove();
  }

  // 3. Remove all categories
  menuWrapper.innerHTML = menuTemplate.emptyCategory;

  // 4. Save empty menu
  saveModuleBtn.click();

  // 5. Generate new menu
  const generateMenu = () => {
    // 5.1. Get all categories (menu is empty, so all categories are not assigned)
    module.querySelector("#categories-btn").click();

    onElementReady(".missing-category", () => {
      //       // 5.2. When categories are loaded window.categoriesList has assigned value.
      //       // Filtr menu array (variable allCategories) based on categoriesList
      const filterNewMenu = (allCategories) => {
        const filterCodes = (codes) => {
          // map codes and add products quantity for each code
          const codesWithQuntity = codes.map((code) => {
            const { categoryCode } = code;

            const quantity = categoriesList.find((el) => {
              return el.code === categoryCode;
            });

            return {
              ...code,
              quantity: quantity ? quantity.quantity : null,
            };
          });
          // filter codes
          const filtredCodes = codesWithQuntity.filter((code) => {
            return categoriesList.find((el) => {
              return el.code === code.categoryCode;
            });
          });
          return filtredCodes;
        };

        const filterSubcategories = (subcategories) => {
          const filtredSubcategoriesAll = subcategories.map((subcategory) => {
            const { subcategoryName, subcategoryOther, codes } = subcategory;
            const filtredCodes = filterCodes(codes);
            const itemsQuantity = filtredCodes.reduce((t, cur) => {
              return t + cur.quantity;
            }, 0);
            const filtredSubcategory = {
              subcategoryName,
              subcategoryOther,
              codes: filtredCodes,
              itemsQuantity,
            };
            return filtredSubcategory;
          });
          const filtredSubcategories = filtredSubcategoriesAll.filter(
            (subcategory) => {
              const { itemsQuantity, subcategoryOther } = subcategory;

              return (
                itemsQuantity &&
                subcategoryOther !== "force" &&
                (itemsQuantity > minItemsQuantityInSubcategory ||
                  subcategoryOther === "not-allowed")
              );
            }
          );

          const subcategoryOtherCodes = filtredSubcategoriesAll
            .filter((subcategory) => {
              const { itemsQuantity, subcategoryOther } = subcategory;

              return (
                (itemsQuantity <= minItemsQuantityInSubcategory &&
                  subcategoryOther === "allowed") ||
                subcategoryOther === "force"
              );
            })
            .map((el) => [...el.codes])
            .flat();

          const subcategoryOther = () => {
            let subcategoryName = "Pozostałe";
            if (subcategoryOtherCodes.length === 1) {
              subcategoryName = subcategoryOtherCodes[0].codeName;
            }
            return {
              subcategoryName,
              codes: subcategoryOtherCodes,
            };
          };

          return subcategoryOtherCodes.length
            ? [...filtredSubcategories, subcategoryOther()]
            : [...filtredSubcategories];
        };

        const filterCategories = (categories) => {
          const filtredCategories = categories
            .map((category) => {
              const { categoryName, icon, subcategories } = category;
              const filtredSubcategories = filterSubcategories(subcategories);

              return {
                categoryName,
                icon,
                subcategories: filtredSubcategories,
              };
            })
            .filter((category) => category.subcategories.length);
          return filtredCategories;
        };
        return filterCategories(allCategories);
      };
      const newCategories = filterNewMenu(allCategories);

      // 5.3. Map filtred menu array and return html
      const mapNewMenu = () => {
        const codesMap = (categoryId, subcategoryId, codes, direct) =>
          codes
            .map((code, codeId) => {
              const { categoryCode, codeName } = code;
              return menuTemplate.code(
                moduleId,
                categoryId,
                subcategoryId,
                codeId,
                categoryCode,
                codeName,
                direct
              );
            })
            .join();
        const subcategoriesMap = (categoryId, subcategories, direct) =>
          subcategories
            .map((subcategory, subcategoryId) => {
              const { subcategoryName, codes } = subcategory;
              return menuTemplate.subcategory(
                maxProducts,
                moduleId,
                categoryId,
                subcategoryId,
                subcategoryName,
                codesMap(categoryId, subcategoryId, codes, direct),
                direct
              );
            })
            .join();
        const categories = newCategories
          .map((category, categoryId) => {
            const { categoryName, icon, subcategories } = category;
            const _subcategories =
              subcategories.length > 1
                ? subcategoriesMap(categoryId, subcategories, false)
                : subcategoriesMap(categoryId, subcategories, true);
            return menuTemplate.category(
              moduleId,
              categoryId,
              categoryName,
              icon,
              _subcategories
            );
          })
          .join();
        return categories;
      };
      menuWrapper.innerHTML = mapNewMenu();

      // 6. Save new menu
      saveModuleBtn.click();

      // 7. When menu is saved - reload page
      if (noticeMsg) {
        noticeMsg.remove();
      }
      onElementReady(".notice-message", () => {
        location.reload();
      });

      // 8. New menu is ready
    });
  };
  onElementReady(".notice-message", generateMenu);
};
export default generateMenu;
