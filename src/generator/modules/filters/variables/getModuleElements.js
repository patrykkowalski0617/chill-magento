const getModuleElements = (module) => {
  const saveFiltersBtn = module.querySelector(".module__button_save");
  const robotFiltersSwitch = document.querySelector("#chill-robot-filters");
  const filterContainer = module.querySelector(".js-filter-wrapper");
  const moduleTitleEl = module.querySelector(".module__title");
  const actionsNBar = module.querySelector(".chill-actions");
  return {
    saveFiltersBtn,
    robotFiltersSwitch,
    filterContainer,
    moduleTitleEl,
    actionsNBar,
  };
};

export default getModuleElements;
