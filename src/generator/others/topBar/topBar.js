import { renderFixButtons } from "../../../chill";
import "./topBar.scss";

const topBar = () => {
  const originBtnBack = document.querySelector("#back");
  const originBtnDelete = document.querySelector("#delete");
  const originBtnClone = document.querySelector("#clone");
  const originBtnPreview = document.querySelector("#preview");
  const actions = [
    [
      "Zmień kolejność modułów",
      () => {
        document.querySelector(".btn_toggle-all").click();
        document.querySelectorAll(".module")[0].scrollIntoView();
        document.body.classList.toggle("module-order-change-mode");
      },
    ],

    [
      "Dodaj moduł",
      () => {
        setTimeout(() => {
          document.querySelector(".module_new").scrollIntoView();
        }, 500);
        document.querySelector(".btn_add-module").click();
      },
    ],
    [
      "Zapisz LP",
      () => {
        document.querySelector('button[data-index="save"]').click();
      },
    ],
    [
      "Powrót",
      () => {
        originBtnBack.click();
      },
    ],
    [
      "Usuń LP",
      () => {
        originBtnDelete.click();
      },
    ],
    [
      "Klonuj LP",
      () => {
        originBtnClone.click();
      },
    ],
    [
      "Podgląd",
      () => {
        originBtnPreview.click();
      },
    ],
    [
      "Zapisz moduły",
      () => {
        document
          .querySelectorAll(".module .module__button_save")
          .forEach((el) => el.click());
      },
    ],
    [
      "Kolorowa skłania: -",
      () => {
        let syntaxMode = JSON.parse(
          localStorage.getItem("magentoChill_syntaxMode")
        );

        document.body.classList.remove(`chill-syntax-highlight-${syntaxMode}`);
        if (syntaxMode < 2) {
          syntaxMode++;
        } else {
          syntaxMode = 0;
        }
        document.body.classList.add(`chill-syntax-highlight-${syntaxMode}`);
        localStorage.setItem("magentoChill_syntaxMode", syntaxMode);
      },
    ],
    [
      "Dark mode &#128520;: nie",
      () => {
        let darkMode = JSON.parse(
          localStorage.getItem("magentoChill_darkMode")
        );
        console.log("darkMode", darkMode);
        if (darkMode === false) {
          document.body.classList.add("chill-dark-mode");
          darkMode = true;
        } else if (darkMode === true) {
          document.body.classList.remove("chill-dark-mode");
          darkMode = false;
        }

        localStorage.setItem("magentoChill_darkMode", darkMode);
      },
    ],
  ];

  document
    .querySelector(".page-actions-buttons")
    .insertAdjacentHTML(
      "afterbegin",
      `<div class="chill-btn-container"></div>`
    );

  const chillBtns = renderFixButtons({
    actions: actions.map((action) => action[0]),
    otherRenderContainer: document.querySelector(
      ".page-actions-buttons .chill-btn-container"
    ),
  });

  actions.forEach((action, i) => {
    chillBtns[i].addEventListener("click", (e) => {
      e.preventDefault();
      action[1](chillBtns[i]);
    });
  });
  document.body.classList.add("top-bar-added");
};

export default topBar;
