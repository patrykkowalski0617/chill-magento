import {
  getModuleElements,
  manageMaxProducts,
  menuTemplate,
  updateModuleTitle,
} from "../variables";

const newModuleCallback = ({ module }) => {
  const { menuWrapper } = getModuleElements(module);
  menuWrapper.innerHTML = menuTemplate.emptyCategory;
  manageMaxProducts(module);
  updateModuleTitle(module);
};

export default newModuleCallback;
