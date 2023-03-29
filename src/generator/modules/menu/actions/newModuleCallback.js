import {
  getModuleElements,
  manageMaxProducts,
  menuTemplate,
} from "../variables";

const newModuleCallback = ({ module }) => {
  const { menuWrapper } = getModuleElements(module);
  menuWrapper.innerHTML = menuTemplate.emptyCategory;
  manageMaxProducts(module);
};

export default newModuleCallback;
