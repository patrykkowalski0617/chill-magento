const manageNewModule = (fixNewModule) => {
  const addNewModuleSaveBtn = document.querySelector(
    ".btn_save.module__button.module__button_save.btn_select-module"
  );
  // const addNewModuleCancelBtn = document.querySelector(
  //   ".btn.btn_rect.btn_right.btn_remove.modulte__button.module__button_remove.btn_select-module"
  // );

  const clickDelay = 400;
  addNewModuleSaveBtn.addEventListener("click", () => {
    setTimeout(fixNewModule, clickDelay);
  });
  // addNewModuleCancelBtn.addEventListener("click", () => {
  //   setTimeout(fixNewModule, clickDelay);
  // });
};

export default manageNewModule;
