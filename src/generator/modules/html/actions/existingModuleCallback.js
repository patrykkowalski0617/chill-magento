import { updateModuleTitle } from "../variables";

const existingModuleCallback = ({ module }) => {
  updateModuleTitle(module, "HTML");
};

export default existingModuleCallback;
