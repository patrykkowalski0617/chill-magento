import { assigningProducts, manageMaxProducts } from "../variables";

const existingModuleCallback = ({ module }) => {
  assigningProducts(module);
  manageMaxProducts(module);
};

export default existingModuleCallback;
