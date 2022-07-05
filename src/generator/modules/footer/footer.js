import { addChillActions, setColor, nnColors } from "../helpers";

const footer = (isNewModule) => {
  const action = (module) => {
    const chillBtns = addChillActions(module, ["Standard"]);
    const bg = module.querySelectorAll(
      '[id^="footer_color_background"], [id^="footer_color_background"] + input'
    );
    const font = module.querySelectorAll(
      '[id^="footer_color_font"], [id^="footer_color_font"] + input'
    );
    const fontHover = module.querySelectorAll(
      '[id^="footer_color_font_hover"], [id^="footer_color_font_hover"] + input'
    );
    const btn = module.querySelectorAll(
      '[id^="footer_color_button"], [id^="footer_color_button"] + input'
    );
    const standard = () => {
      bg.forEach((el) => setColor(el, nnColors.white));
      font.forEach((el) => setColor(el, nnColors.black));
      fontHover.forEach((el) => {
        setColor(el, nnColors.black);
      });
      btn.forEach((el) => setColor(el, nnColors.red));
    };
    if (isNewModule) {
      standard();
    }
    chillBtns.forEach((el, i) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        if (i === 0) {
          standard();
        }
      });
    });
  };

  document.querySelectorAll(".module__footer").forEach((module) => {
    action(module);
  });
};

export default footer;
