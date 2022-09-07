import { markInputs } from "../../../../chill";
import { getModuleElements } from "../variables";

const defaultFix = ({ module }) => {
  const { requiredSwitches } = getModuleElements(module);
  requiredSwitches.forEach((el) => {
    if (!el.checked) {
      el.click();
    }
  });
  markInputs(Array.from(requiredSwitches).map((el) => el.parentNode));
};

export default defaultFix;
