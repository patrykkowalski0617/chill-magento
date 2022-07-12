import "./menu.scss";
import { renderFixButtons } from "../commonVariables";
import {
  getModuleElements,
  generateMenu,
  assigningProducts,
} from "./variables";

const menu = (isNewModule) => {
  const fix = (module) => {
    const actions = ["defaultFix", "generateMenu"];
    const chillBtns = renderFixButtons({
      generatorModule: module,
      actions,
    });
    const { menuWrapper, requiredSwitches } = getModuleElements(module);

    assigningProducts(module);

    const defaultFix = () => {
      requiredSwitches.forEach((el) => {
        if (!el.checked) {
          el.click();
          el.parentNode.classList.add("filled");
          el.parentNode.classList.remove("touched");
        } else {
          el.parentNode.classList.add("touched");
          el.parentNode.classList.remove("filled");
        }
      });
    };

    if (isNewModule) {
      menuWrapper.innerHTML = menuTemplate.emptyCategory;
      defaultFix();
    }
    chillBtns.forEach((btn, i) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        switch (actions[i]) {
          case "defaultFix":
            defaultFix();
            break;
          case "generateMenu":
            generateMenu(module);
            break;

          default:
            break;
        }
      });
    });
  };

  document
    .querySelectorAll(".module__menu:not(.already-chilled)")
    .forEach((module) => {
      module.classList.add("already-chilled");
      fix(module);
    });
};

export default menu;
