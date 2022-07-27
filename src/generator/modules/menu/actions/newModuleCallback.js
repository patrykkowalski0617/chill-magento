import { getModuleElements, menuTemplate } from "../variables";

const newModuleCallback = (module) => {
  const { menuWrapper } = getModuleElements(module);
  menuWrapper.innerHTML = menuTemplate.emptyCategory;
};

export default newModuleCallback;
