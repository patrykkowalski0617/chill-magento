import { renderInputs, updateModuleTitle } from "../../listing/variables";

const existingModuleCallback = (module) => {
  renderInputs(module);
  updateModuleTitle(module);
};

export default existingModuleCallback;
