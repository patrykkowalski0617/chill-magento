import inputFileFix from "./inputFileFix";

const stepsFix = (module) => {
  const addStepBtn = module.querySelector(".btn.btn_add-menu.js-add-step");
  addStepBtn.addEventListener(
    "click",
    () => {
      setTimeout(() => {
        inputFileFix(module);
      });
    },
    500
  );
};

export default stepsFix;
