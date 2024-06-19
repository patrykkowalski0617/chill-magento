const updateModuleTitle = (module) => {
  const moduleTitleEls = module.querySelectorAll(".module__title");
  const modId = module.dataset.moduleId;

  moduleTitleEls.forEach((moduleTitleEl) => {
    moduleTitleEl.innerHTML = `Menu ${modId ? modId : ""}`;
  });
};

export default updateModuleTitle;
