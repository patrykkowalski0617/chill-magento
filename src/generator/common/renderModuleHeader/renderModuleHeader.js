import { renderFixButtons } from "../../../chill";
import "./renderModuleHeader.scss";

const renderModuleHeader = (providedModule) => {
  const modules = document.querySelectorAll(".module");

  const reloadPage = () => {
    setTimeout(() => {
      location.reload();
    }, 1000);
  };
  const deleteModule = (module) => {
    module.querySelector(".module__button_remove").click();
    reloadPage();
  };

  const saveModule = (module) => {
    module.querySelector(".module__button_save").click();
    if (!module.classList.contains("module_saved")) {
      reloadPage();
    }
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
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        btnsFunctions[i](module);
      });
    });
  };
  if (!providedModule) {
    modules.forEach((module) => {
      renderHeader(module);
    });
  } else {
    renderHeader(providedModule);
  }
};

export default renderModuleHeader;
