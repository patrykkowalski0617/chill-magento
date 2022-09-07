import { updateModuleTitle } from "../variables";

const newModuleCallback = ({ module }) => {
  updateModuleTitle(module, "HTML");
};

export default newModuleCallback;
