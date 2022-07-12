export const getModuleElements = (module) => {
  const someElemntInModule = module.querySelectorAll(
    '[id^="footer_color_background"], [id^="footer_color_background"] + input'
  );

  return { someElemntInModule };
};
