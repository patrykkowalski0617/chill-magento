import { renderInputs, updateModuleTitle, templateSelect } from "../variables";

const existingModuleCallback = ({ module }) => {
  renderInputs(module);
  updateModuleTitle(module);
  templateSelect(module);
};

export default existingModuleCallback;
