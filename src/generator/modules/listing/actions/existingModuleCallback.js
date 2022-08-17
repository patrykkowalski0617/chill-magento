import { renderInputs, updateModuleTitle } from "../variables";

const existingModuleCallback = (module) => {
  renderInputs(module);
  updateModuleTitle(module);
};

export default existingModuleCallback;
