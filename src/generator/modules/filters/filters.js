import { renderFixButtons } from "../commonVariables";
import {
  getModuleElements,
  basicFilters,
  fliterTemplate,
  generateFilters,
} from "./variables";
import "./filters.scss";

const filters = (isNewModule) => {
  const fix = (module) => {
    const actions = ["generateFilters"];
    const chillBtns = renderFixButtons({
      generatorModule: module,
      actions,
    });
    const { filterContainer } = getModuleElements(module);

    const defaultFix = () => {
      basicFilters.forEach((el, i) => {
        filterContainer.insertAdjacentHTML(
          "beforeend",
          fliterTemplate(el[0], el[1], i)
        );
      });
    };

    if (isNewModule) {
      defaultFix();
    }
    chillBtns.forEach((btn, i) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        switch (actions[i]) {
          case "generateFilters":
            generateFilters(module);
            break;

          default:
            break;
        }
      });
    });
  };

  document
    .querySelectorAll(".module__filters:not(.already-chilled)")
    .forEach((module) => {
      module.classList.add("already-chilled");
      fix(module);
    });
};

export default filters;
