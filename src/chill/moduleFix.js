import { renderFixButtons } from "./";

const moduleFix =
  ({ moduleClass, actions, newModuleCallback, existingModulesCallback }) =>
  (isNewModule) => {
    const fix = (module, isNewModule) => {
      const btnsNames = actions.map((action) => action[0]);
      const chillBtns = renderFixButtons({
        generatorModule: module,
        actions: btnsNames,
      });

      if (isNewModule && actions[0][0] === "defaultFix") {
        actions[0][1](module);
      }

      if (isNewModule) {
        newModuleCallback(module);
      }

      existingModulesCallback(module);

      actions.forEach((action, i) => {
        chillBtns[i].addEventListener("click", (e) => {
          e.preventDefault();
          action[1](module);
        });
      });
    };
    document
      .querySelectorAll(`.${moduleClass}:not(.already-chilled)`)
      .forEach((module) => {
        module.classList.add("already-chilled");
        fix(module, isNewModule);
      });
  };

export default moduleFix;
