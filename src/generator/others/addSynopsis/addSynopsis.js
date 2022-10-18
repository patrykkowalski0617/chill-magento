import "./addSynopsis.scss";

const addSynopsis = (functionDelay = 100) => {
  if (!document.querySelector(".chill-generator-synopsis")) {
    const sideMenu = document.querySelector(".admin__menu");
    sideMenu.insertAdjacentHTML(
      "beforeend",
      `<div class="chill-generator-synopsis"></div>`
    );
  }

  const synopsis = document.querySelector(".chill-generator-synopsis");
  const makeSynopsis = () => {
    synopsis.innerHTML = `<a href="#container" class="chill-generator-synopsis-btn page-top">TOP</a><div class="synopsis-tip"></div>`;
    document.querySelectorAll(".module").forEach((module) => {
      if (!module.classList.contains("chill-synopsis-dragend-event-added")) {
        module.addEventListener("dragend", () => {
          addSynopsis();
        });
        module.classList.add("chill-synopsis-dragend-event-added");
      }

      const moduleBar = module.querySelector(".module__bar");
      const moduleTitle = moduleBar.querySelector(".module__title").innerHTML;
      const btn = document.createElement("BUTTON");
      btn.innerHTML = moduleTitle;
      btn.classList.add("chill-generator-synopsis-btn");
      btn.addEventListener("click", () => {
        const scrollToModule = () => {
          module.scrollIntoView();
        };
        if (module.querySelector(".module__form").style.display === "none") {
          module.querySelector(".module__bar").click();
          setTimeout(() => {
            scrollToModule();
          }, 500);
        } else {
          scrollToModule();
        }
      });
      synopsis.appendChild(btn);
    });
  };
  setTimeout(() => {
    makeSynopsis();
  }, functionDelay);
};

export default addSynopsis;
