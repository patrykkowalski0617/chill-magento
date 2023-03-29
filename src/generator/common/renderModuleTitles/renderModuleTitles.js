const renderModuleTitles = (providedModule) => {
  setTimeout(() => {
    const modules = document.querySelectorAll(".module");
    const renderTitle = (module) => {
      const modulOryginalTitle =
        module.querySelector(".module__title").innerText;
      const chillHeaderModuleTitle = module.querySelector(
        ".module__form > .module__title"
      );
      if (!chillHeaderModuleTitle) {
        module
          .querySelector(".chill-btn-container")
          .insertAdjacentHTML(
            "beforebegin",
            `<span class="module__title"></span>`
          );
        module.querySelector(".module__form > .module__title").innerHTML =
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
  }, 700);
};

export default renderModuleTitles;
