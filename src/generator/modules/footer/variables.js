export const getModuleElements = (module) => {
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
  return { bg, font, fontHover, btn };
};
