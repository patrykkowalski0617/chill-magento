import {
  assigningProducts,
  manageMaxProducts,
  updateModuleTitle,
} from "../variables";

const existingModuleCallback = ({ module }) => {
  assigningProducts(module);
  manageMaxProducts(module);
  updateModuleTitle(module);
};

export default existingModuleCallback;
