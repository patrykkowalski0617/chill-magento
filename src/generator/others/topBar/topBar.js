import { renderFixButtons } from "../../../chill";
import "./topBar.scss";

const topBar = () => {
  const oryginalBtnBack = document.querySelector("#back");
  const oryginalBtnDelete = document.querySelector("#delete");
  const oryginalBtnClone = document.querySelector("#clone");
  const oryginalBtnPreview = document.querySelector("#preview");
  const actions = [
    [
      "Zmień kolejność modułów",
      (btn) => {
        document.querySelector(".btn_toggle-all").click();
        document.querySelectorAll(".module")[0].scrollIntoView();
        // btn.classList.toggle("change-module-order-alter-txt");
        // document
        //   .querySelector(".chill-generator-synopsis")
        //   .classList.toggle("hidden");
        document.body.classList.toggle("module-order-change-mode");
        // document.querySelectorAll(".module__bar").forEach((el) => {
        //   el.classList.toggle("block-collapse");
        //   el.querySelector(".btn_toggle").classList.toggle("hidden");
        // });
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
        oryginalBtnBack.click();
      },
    ],
    [
      "Usuń LP",
      () => {
        oryginalBtnDelete.click();
      },
    ],
    [
      "Klonuj LP",
      () => {
        oryginalBtnClone.click();
      },
    ],
    [
      "Podgląd",
      () => {
        oryginalBtnPreview.click();
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
