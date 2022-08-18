import { saveModule, deleteModule, renderFixButtons } from "./";
// import { addSynopsis } from "../generator/others";

import "./moduleFix.scss";

const moduleFix =
  ({ moduleClass, actions, newModuleCallback, existingModuleCallback }) =>
  (isNewModule) => {
    actions.unshift(["saveModule", saveModule], ["deleteModule", deleteModule]);
    const fix = (module, isNewModule) => {
      const btnsNames = actions.map((action) => action[0]);
      if (isNewModule) {
        module
          .querySelector(".module__content")
          .insertAdjacentHTML(
            "afterbegin",
            `<div class="chill-btn-container"></div>`
          );
        // addSynopsis();
      }
      const chillBtns = renderFixButtons({
        generatorModule: module,
        actions: btnsNames,
      });

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
