import { renderInputs, updateModuleTitle, templateSelect } from "../variables";

const newModuleCallback = ({ module }) => {
  renderInputs(module);
  updateModuleTitle(module);
  templateSelect(module);
};

export default newModuleCallback;
