import { markInputs, n24Colors, nnColors } from "../../../../chill";

const defaultFix = ({ module, isN24 }) => {
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

  bg.forEach((el) => (el.value = isN24 ? n24Colors.white : nnColors.white));
  font.forEach((el) => (el.value = isN24 ? n24Colors.black : nnColors.black));
  fontHover.forEach((el) => {
    el.value = isN24 ? n24Colors.blue : nnColors.black;
  });
  btn.forEach((el) => (el.value = isN24 ? n24Colors.blue : nnColors.red));
  markInputs([...bg, ...font, ...fontHover, ...btn]);
};

export default defaultFix;
