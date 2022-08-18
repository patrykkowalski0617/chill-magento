import "./saveModule.scss";

const saveModule = (module) => {
  module.querySelector(".module__button_save").click();
  setTimeout(() => {
    location.reload();
  }, 100);
};

export default saveModule;
