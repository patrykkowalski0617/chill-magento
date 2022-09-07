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
  ({ isNewModule, isN24 } = {}) => {
    const fix = (module, isNewModule) => {
      const actionsProps = { module, isN24 };
      if (actions) {
        const btnsNames = actions.map(({ btnName, n24Ready }) =>
          n24Ready && isN24 ? btnName + " n24" : btnName
        );

        const chillBtns = renderFixButtons({
          generatorModule: module,
          actions: btnsNames,
        });

        if (
          isNewModule &&
          (actions[0].btnName === "defaultFix" ||
            actions[0].btnName === "defaultFixInvisible")
        ) {
          actions[0].callback(actionsProps);
        }

        actions.forEach(({ callback }, i) => {
          chillBtns[i].addEventListener("click", (e) => {
            e.preventDefault();
            callback(actionsProps);
          });
        });
      }

      if (isNewModule && newModuleCallback) {
        newModuleCallback(actionsProps);
      } else if (existingModuleCallback) {
        existingModuleCallback(actionsProps);
      }

      if (onSave) {
        const saveBtn = module.querySelector(".module__button_save");
        saveBtn.addEventListener("click", () => {
          onSave(actionsProps);
        });
      }

      const deleteBtn = module.querySelector(".module__button_remove");
      deleteBtn.addEventListener("click", () => {
        if (onDelete) {
          onDelete(actionsProps);
        }
        addSynopsis(1000);
      });
    };

    document
      .querySelectorAll(`.${moduleClass}:not(.already-chilled)`)
      .forEach((module, isN24) => {
        module.classList.add("already-chilled");
        fix(module, isNewModule, isN24);
      });
  };

export default moduleFix;
