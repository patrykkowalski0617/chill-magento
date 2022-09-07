import { addBanerTitle } from "../variables";

const existingModuleCallback = ({ module }) => {
  addBanerTitle(module);
};

export default existingModuleCallback;
