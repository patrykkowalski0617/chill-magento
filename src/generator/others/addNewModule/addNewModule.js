import {
  confirmSelectedNewModuleImmediately,
  manageAddingModule,
} from "./variables";

const addNewModule = () => {
  const addModuleBtn = document.querySelector(".btn_add-module");
  const clickHandler = () => {
    confirmSelectedNewModuleImmediately();
    manageAddingModule();
  };
  const clickDelay = 40;

  addModuleBtn.addEventListener("click", () => {
    setTimeout(clickHandler, clickDelay);
  });
};

export default addNewModule;
