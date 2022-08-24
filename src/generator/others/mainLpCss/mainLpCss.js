import { cssSnippets } from "./variables";
import { renderFixButtons } from "../../../chill";

const mainLpCss = () => {
  const cssContainer = document.querySelector(
    ".admin__field-control._with-tooltip"
  );
  const chillBtns = renderFixButtons({
    actions: [
      "Standard",
      "Zielona apla",
      "Menu z jedną kategorią",
      "Inny color w baner hero",
    ],
    otherRenderContainer: document.querySelector(
      ".admin__field-control._with-tooltip"
    ),
  });

  const input = cssContainer.querySelector(".admin__control-textarea");
  const updateInput = (btn, input, newHTML, begin = false) => {
    if (!input.value.includes(newHTML)) {
      if (!begin) {
        input.value += newHTML;
      } else {
        input.value = newHTML + input.value;
      }
      btn.classList.add("isOn");
    } else {
      input.value = input.value.replace(newHTML, "");
      btn.classList.remove("isOn");
    }
    const e = new Event("change");
    const element = document.querySelector(".admin__control-textarea");
    element.dispatchEvent(e);
  };
  chillBtns.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (i === 0) {
        updateInput(btn, input, cssSnippets.mainCss);
      } else if (i === 1) {
        updateInput(btn, input, cssSnippets.greenApla);
      } else if (i === 2) {
        updateInput(btn, input, cssSnippets.singleCategoryInOldMenu);
      } else if (i === 3) {
        updateInput(btn, input, cssSnippets.bannerColor);
      }
      input.classList.add("filled");
    });
  });
  if (document.querySelector(".admin__collapsible-title._changed")) {
    chillBtns[0].click();
    const startDateInput = document.querySelector(
      ".admin__control-text._has-datepicker"
    );
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    startDateInput.value = `${day}/${month}/${year} 00:00`;
    const e = new Event("change");
    startDateInput.dispatchEvent(e);
  }
};

export default mainLpCss;
