import { renderFixButtons } from "../../../chill";
import { getModuleElements } from "./variables";

const fix = (module, isNewModule) => {
  const actions = [
    "defaultFix",
    "otherFix",
    { btnSetName: "userSetting", actions: ["setting1", "setting2"] },
  ];
  const chillBtns = renderFixButtons({
    generatorModule: module,
    actions,
  });
  const { someElemntInModule } = getModuleElements(module);

  const defaultFix = () => {
    console.log("defaultFix");
  };
  const otherFix = () => {
    console.log("otherFix");
  };
  if (isNewModule) {
    defaultFix();
  }
  chillBtns.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      switch (actions[i]) {
        case "defaultFix":
          defaultFix();
          break;
        case "otherFix":
          otherFix();
          break;

        default:
          break;
      }
    });
  });
};

const listing = (isNewModule) => {
  document
    .querySelectorAll(".module__module-name:not(.already-chilled)")
    .forEach((module) => {
      module.classList.add("already-chilled");
      fix(module, isNewModule);
    });
};

export default listing;
