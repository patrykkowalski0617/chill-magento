import "./bannerHero.scss";

const bannerHero = (isNewModule) => {
  const fix = (module) => {
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

  document
    .querySelectorAll(".module__module-name:not(.already-chilled)")
    .forEach((module) => {
      module.classList.add("already-chilled");
      fix(module);
    });
};

export default bannerHero;
