import { renderFixButtons } from "../../../chill";
import { renderModuleHeader, renderModulTitles } from "../";
import stickyModuleHeaders from "../../others/stickyModuleHeaders/stickyModuleHeaders";
import "./moduleFix.scss";

const moduleFix =
  ({ moduleClass, actions, newModuleCallback, existingModuleCallback }) =>
  (isNewModule) => {
    const fix = (module, isNewModule) => {
      const btnsNames = actions.map((action) => action[0]);
      if (isNewModule) {
        renderModuleHeader(module);
        stickyModuleHeaders();
        renderModulTitles(module);
      }
      const chillBtns = renderFixButtons({
        generatorModule: module,
        actions: btnsNames,
      });

      if (
        isNewModule &&
        (actions[0][0] === "defaultFix" ||
          actions[0][0] === "defaultFixInvisible")
      ) {
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
      } else if (existingModuleCallback) {
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
