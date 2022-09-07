import { renderInputs, updateModuleTitle } from "../variables";

const newModuleCallback = ({ module }) => {
  renderInputs(module);
  updateModuleTitle(module);
};

export default newModuleCallback;
