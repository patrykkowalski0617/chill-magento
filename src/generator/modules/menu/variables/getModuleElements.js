const getModuleElements = (module) => {
  const menuWrapper = module.querySelector(".js-category-wrapper");
  const requiredSwitches = module.querySelectorAll(
    `[id^="products_menu_width"], [id^="products_menu_icons"]`
  );
  const saveModuleBtn = module.querySelector(".module__button_save");
  const noticeMsg = module.querySelector(".notice-message");
  const findProductsBtn = module.querySelector(
    ".btn.btn_rect.btn_center.btn_find.module__button.module__button_find"
  );
  return {
    menuWrapper,
    requiredSwitches,
    saveModuleBtn,
    noticeMsg,
    findProductsBtn,
  };
};

export default getModuleElements;
