const renderModulTitles = () => {
  const modules = document.querySelectorAll(".module");
  modules.forEach((module) => {
    module
      .querySelector(".chill-btn-container")
      .insertAdjacentHTML(
        "afterbegin",
        `<span class="module__title">${
          module.querySelector(".module__title").innerText
        }</span>`
      );
  });
};

export default renderModulTitles;
