const updateModuleTitle = (module, isNewListing) => {
  const moduleTitleEl = module.querySelector(".module__title");
  const modId = module.dataset.moduleId;

  moduleTitleEl.innerHTML = `${isNewListing ? "Nowa l" : "L"}ista produktów ${
    modId ? modId : ""
  }`;
};

export default updateModuleTitle;
