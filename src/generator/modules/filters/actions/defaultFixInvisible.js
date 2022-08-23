import { getModuleElements, basicFilters, fliterTemplate } from "../variables";
const defaultFixInvisible = (module) => {
  const { filterContainer } = getModuleElements(module);
  basicFilters.forEach((el, i) => {
    filterContainer.insertAdjacentHTML(
      "beforeend",
      fliterTemplate(el[0], el[1], i)
    );
  });
};

export default defaultFixInvisible;
