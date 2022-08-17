const updateModuleTitle = (module) => {
  const moduleTitleEl = module.querySelector(".module__title");
  const modId = module.dataset.moduleId;

  moduleTitleEl.innerHTML = `Lista produktów ${modId ? modId : ""}`;
};

export default updateModuleTitle;
