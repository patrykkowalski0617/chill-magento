import "./addSynopsis.scss";

const addSynopsis = () => {
  if (!document.querySelector(".chill-generator-synopsis")) {
    const sideMenu = document.querySelector(".admin__menu");
    sideMenu.insertAdjacentHTML(
      "beforeend",
      `<div class="chill-generator-synopsis"></div>`
    );
  }

  const synopsis = document.querySelector(".chill-generator-synopsis");
  const makeSynopsis = () => {
    synopsis.innerHTML = `<a href="#container" class="chill-generator-synopsis-btn page-top">TOP</a>`;
    document.querySelectorAll(".module__bar").forEach((el) => {
      const moduleTitle = el.querySelector(".module__title").innerHTML;
      var btn = document.createElement("BUTTON");
      btn.innerHTML = moduleTitle;
      btn.classList.add("chill-generator-synopsis-btn");
      btn.addEventListener("click", () => {
        let moduleEl = el.parentElement.parentElement;
        moduleEl = moduleEl.classList.contains("module_saved")
          ? el.parentElement.parentElement
          : el.parentElement;
        const rest = () => {
          moduleEl.scrollIntoView();
          moduleEl.classList.add("mark");
          setTimeout(() => {
            moduleEl.classList.remove("mark");
          }, 200);
        };
        if (moduleEl.querySelector(".module__form").style.display === "none") {
          moduleEl.querySelector(".module__bar").click();
          setTimeout(() => {
            rest();
          }, 500);
        } else {
          rest();
        }
      });
      synopsis.appendChild(btn);
    });
  };
  setTimeout(() => {
    makeSynopsis();
  }, 100);
};

export default addSynopsis;
