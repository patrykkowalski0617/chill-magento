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

  bg.forEach((el) => (el.value = !isN24 ? nnColors.white : n24Colors.white));
  font.forEach((el) => (el.value = isN24 ? nnColors.black : n24Colors.black));
  fontHover.forEach((el) => {
    el.value = !isN24 ? nnColors.black : n24Colors.blue;
  });
  btn.forEach((el) => (el.value = !isN24 ? nnColors.red : n24Colors.blue));
  markInputs([...bg, ...font, ...fontHover, ...btn]);
};

export default defaultFix;
