const renderModulTitles = (providedModule) => {
  const modules = document.querySelectorAll(".module");
  const renderTitle = (module) => {
    module
      .querySelector(".chill-btn-container")
      .insertAdjacentHTML(
        "afterbegin",
        `<span class="module__title">${
          module.querySelector(".module__title").innerText
        }</span>`
      );
  };

  if (!providedModule) {
    modules.forEach((module) => {
      renderTitle(module);
    });
  } else {
    renderTitle(providedModule);
  }
};

export default renderModulTitles;
