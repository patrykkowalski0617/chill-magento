import { getModuleElements } from "../variables";

const defaultFix = (module) => {
  const { requiredSwitches } = getModuleElements(module);
  requiredSwitches.forEach((el) => {
    if (!el.checked) {
      el.click();
      el.parentNode.classList.add("filled");
      el.parentNode.classList.remove("touched");
    } else {
      el.parentNode.classList.add("touched");
      el.parentNode.classList.remove("filled");
    }
  });
};

export default defaultFix;
