import { markInputs, nnColors } from "../../../../chill";

const defaultFix = (module) => {
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
  bg.forEach((el) => (el.value = nnColors.white));
  font.forEach((el) => (el.value = nnColors.black));
  link.forEach((el) => {
    el.value = nnColors.black;
  });
  lines.forEach((el) => (el.value = nnColors.red));

  markInputs([...bg, ...font, ...link, ...lines]);
};

export default defaultFix;
