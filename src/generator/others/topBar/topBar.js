import { renderFixButtons } from "../../../chill";
import "./topBar.scss";

const topBar = () => {
  const originBtnBack = document.querySelector("#back");
  const originBtnDelete = document.querySelector("#delete");
  const originBtnClone = document.querySelector("#clone");
  const originBtnPreview = document.querySelector("#preview");
  const saveLp = (callback) => {
    const lpModuleSaveBtns = document.querySelectorAll(
      ".module .module__button_save"
    );
    const lpSaveBtn = document.querySelector('button[data-index="save"]');
    if (lpModuleSaveBtns) {
      lpModuleSaveBtns.forEach((el) => el.click());
      setTimeout(() => {
        lpSaveBtn.click();
      }, 1000);
    } else {
      lpSaveBtn.click();
    }
    if (callback) {
      setTimeout(() => {
        callback();
      }, 1200);
    }
  };
  const actions = [
    [
      "DM: nie",
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
    ["Zapisz LP", saveLp],
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
      "Powrót",
      () => {
        originBtnBack.click();
      },
    ],
    [
      "Podgląd",
      () => {
        originBtnPreview.click();
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
