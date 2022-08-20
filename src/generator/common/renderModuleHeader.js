import { renderFixButtons } from "../../chill";
import "./renderModuleHeader.scss";

const renderModuleHeader = () => {
  const modules = document.querySelectorAll(".module");

  const reloadPage = () => {
    setTimeout(() => {
      location.reload();
    }, 200);
  };
  const deleteModule = (module) => {
    module.querySelector(".module__button_remove").click();
    reloadPage();
  };

  const saveModule = (module) => {
    module.querySelector(".module__button_save").click();
    reloadPage();
  };
  const btnsFunctions = [deleteModule, saveModule];

  modules.forEach((module) => {
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
  });
};

export default renderModuleHeader;
