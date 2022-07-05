import {
  confirmSelectedNewModuleImmediately,
  fixNewModule,
  manageNewModule,
} from "./variables";

const addNewModule = () => {
  const addModuleBtn = document.querySelector(".btn_add-module");
  const clickHandler = () => {
    confirmSelectedNewModuleImmediately();
    manageNewModule(fixNewModule);
  };
  const clickDelay = 40;

  addModuleBtn.addEventListener("click", () => {
    setTimeout(clickHandler, clickDelay);
  });
};

export default addNewModule;
