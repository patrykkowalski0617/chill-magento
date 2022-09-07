import { markInputs, n24Colors, nnColors } from "../../../../chill";

const defaultFix = ({ module, isN24 }) => {
  const bg = module.querySelectorAll(
    '[id^="tip_color_background"], [id^="tip_color_background"] + input'
  );
  const font = module.querySelectorAll(
    '[id^="tip_color_font"], [id^="tip_color_font"] + input'
  );
  const link = module.querySelectorAll(
    '[id^="tip_color_link"], [id^="tip_color_link"] + input'
  );
  const lines = module.querySelectorAll(
    '[id^="tip_color_lines"], [id^="tip_color_lines"] + input'
  );

  bg.forEach((el) => (el.value = !isN24 ? nnColors.white : n24Colors.white));
  font.forEach((el) => (el.value = !isN24 ? nnColors.black : n24Colors.black));
  link.forEach((el) => {
    el.value = !isN24 ? nnColors.black : n24Colors.blue;
  });
  lines.forEach((el) => (el.value = !isN24 ? nnColors.red : n24Colors.blue));

  markInputs([...bg, ...font, ...link, ...lines]);
};

export default defaultFix;
