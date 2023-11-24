import { renderFixButtons } from "../../../chill";
import "./renderModuleHeaders.scss";

const renderModuleHeaders = (providedModule) => {
  let timeoutId;
  const modules = document.querySelectorAll(".module:not(.module_new)");
  if (modules.length) {
    const deleteModule = (module) => {
      const delayeClassName = "chill-delete-delay";
      const btnMagento = module.querySelector(".module__button_remove");
      const btnChill = module.querySelector(".delete-btn");

      if (!btnChill.classList.contains(delayeClassName)) {
        btnChill.classList.add("chill-delete-delay");
        timeoutId = setTimeout(() => {
          btnMagento.click();
        }, 2000);
      } else {
        btnChill.classList.remove("chill-delete-delay");
        clearTimeout(timeoutId);
      }
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
        if (i === 1) {
          btn.classList.add("save-btn");
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
