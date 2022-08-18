import { renderFixButtons } from "./";
import "./moduleFix.scss";

const moduleFix =
  ({ moduleClass, actions, newModuleCallback, existingModuleCallback }) =>
  (isNewModule) => {
    const fix = (module, isNewModule) => {
      const btnsNames = actions.map((action) => action[0]);
      const chillBtns = renderFixButtons({
        generatorModule: module,
        actions: btnsNames,
      });
      module
        .querySelector(".chill-btn-container")
        .insertAdjacentHTML(
          "afterbegin",
          `<span class="module__title">${
            module.querySelector(".module__title").innerText
          }</span>`
        );
      if (isNewModule && actions[0][0] === "defaultFix") {
        actions[0][1](module);
      }

      actions.forEach((action, i) => {
        chillBtns[i].addEventListener("click", (e) => {
          e.preventDefault();
          action[1](module);
        });
      });

      if (isNewModule && newModuleCallback) {
        newModuleCallback(module);
      }
      if (existingModuleCallback) {
        existingModuleCallback(module);
      }
    };
    document
      .querySelectorAll(`.${moduleClass}:not(.already-chilled)`)
      .forEach((module) => {
        module.classList.add("already-chilled");
        fix(module, isNewModule);
      });
  };

export default moduleFix;
