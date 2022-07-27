import { renderFixButtons } from "../../../chill";
import { setColor, nnColors } from "../commonVariables";
import { getModuleElements } from "./variables";
import "./footer.scss";

const footer = (isNewModule) => {
  const fix = (module) => {
    const actions = ["defaultFix"];
    const chillBtns = renderFixButtons({
      generatorModule: module,
      actions,
    });
    const { bg, font, fontHover, btn } = getModuleElements(module);
    const defaultFix = () => {
      bg.forEach((el) => setColor(el, nnColors.white));
      font.forEach((el) => setColor(el, nnColors.black));
      fontHover.forEach((el) => {
        setColor(el, nnColors.black);
      });
      btn.forEach((el) => setColor(el, nnColors.red));
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

          default:
            break;
        }
      });
    });
  };

  document
    .querySelectorAll(".module__footer:not(.already-chilled)")
    .forEach((module) => {
      module.classList.add("already-chilled");
      fix(module);
    });
};

export default footer;
