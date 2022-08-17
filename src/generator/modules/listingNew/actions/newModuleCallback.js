import { renderInputs, updateModuleTitle } from "../../listing/variables";

const newModuleCallback = (module) => {
  renderInputs(module);
  updateModuleTitle(module);
};

export default newModuleCallback;
