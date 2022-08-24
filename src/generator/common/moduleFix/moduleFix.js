import { renderFixButtons } from "../../../chill";
import addSynopsis from "../../others/addSynopsis/addSynopsis";
import "./moduleFix.scss";

const moduleFix =
  ({
    moduleClass,
    actions,
    newModuleCallback,
    existingModuleCallback,
    onSave,
    onDelete,
  }) =>
  (isNewModule) => {
    const fix = (module, isNewModule) => {
      if (actions) {
        const btnsNames = actions.map((action) => action[0]);

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
      }

      if (isNewModule && newModuleCallback) {
        newModuleCallback(module);
      } else if (existingModuleCallback) {
        existingModuleCallback(module);
      }

      if (onSave) {
        const saveBtn = module.querySelector(".module__button_save");
        saveBtn.addEventListener("click", () => {
          onSave(module);
        });
      }

      const deleteBtn = module.querySelector(".module__button_remove");
      deleteBtn.addEventListener("click", () => {
        if (onDelete) {
          onDelete(module);
        }
        addSynopsis(1000);
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
