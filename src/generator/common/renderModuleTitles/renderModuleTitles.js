const renderModuleTitles = (providedModule) => {
  const modules = document.querySelectorAll(".module");
  const renderTitle = (module) => {
    const modulOryginalTitle = module.querySelector(".module__title").innerText;
    const chillHeaderModuleTitle = module.querySelector(
      ".chill-btn-container .module__title"
    );
    if (!chillHeaderModuleTitle) {
      module
        .querySelector(".chill-btn-container")
        .insertAdjacentHTML(
          "afterbegin",
          `<span class="module__title"></span>`
        );
      module.querySelector(".chill-btn-container .module__title").innerHTML =
        modulOryginalTitle;
    } else {
      chillHeaderModuleTitle.innerHTML = modulOryginalTitle;
    }
  };

  if (!providedModule) {
    modules.forEach((module) => {
      renderTitle(module);
    });
  } else {
    renderTitle(providedModule);
  }
};

export default setTimeout(renderModuleTitles, 700);
