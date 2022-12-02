import { renderFixButtons } from "../../../chill";
import "./renderModuleHeaders.scss";

const renderModuleHeaders = (providedModule) => {
  const modules = document.querySelectorAll(".module:not(.module_new)");
  if (modules.length) {
    const deleteModule = (module) => {
      module.querySelector(".module__button_remove").click();
    };

    const saveModule = (module) => {
      module.querySelector(".module__button_save").click();
    };
    const btnsFunctions = [deleteModule, saveModule];

    const renderHeader = (module) => {
      module
        .querySelector(".module__content")
        .insertAdjacentHTML(
          "afterbegin",
          `<div class="chill-btn-container"></div>`
        );
      const chillBtns = renderFixButtons({
        actions: ["delete", "save"],
        generatorModule: module,
      });
      chillBtns.forEach((btn, i) => {
        if (i === 0) {
          btn.classList.add("delete-btn");
        }
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          btnsFunctions[i](module);
        });
      });
      module.classList.add("chill-header-added");
    };
    if (!providedModule) {
      modules.forEach((module) => {
        renderHeader(module);
      });
    } else {
      renderHeader(providedModule);
    }
  } else {
    console.log("renderModuleHeaders: no modules");
  }
};

export default renderModuleHeaders;
