import "./deleteModule.scss";

const deleteModule = (module) => {
  module.querySelector(".module__button_remove").click();
  setTimeout(() => {
    location.reload();
  }, 100);
};

export default deleteModule;
