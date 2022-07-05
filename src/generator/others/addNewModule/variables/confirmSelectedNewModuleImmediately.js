const confirmSelectedNewModuleImmediately = () => {
  const confirmSelectionBtn = document.querySelector(
    ".module.module_new .btn_save"
  );
  const select = document.querySelector(".module.module_new select");
  select.addEventListener("change", () => {
    confirmSelectionBtn.click();
  });
};

export default confirmSelectedNewModuleImmediately;
