import { updateModuleTitle } from "../../html/variables";

const existingModuleCallback = ({ module }) => {
  updateModuleTitle(module, "HTML EXTENDED");
};

export default existingModuleCallback;
