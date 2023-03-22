import { cssSnippets } from "./variables";
import { renderFixButtons } from "../../../chill";

const mainLpCss = () => {
  const cssContainer = document.querySelector(
    ".admin__field-control._with-tooltip"
  );
  const chillBtns = renderFixButtons({
    actions: [
      "defaultFix",
      "hideNumbersInSideTips",
      "Zielona apla",
      "payback",
      "Stare menu z jedną kategorią",
      "Inny color w baner hero",
    ],
    otherRenderContainer: document.querySelector(
      ".admin__field-control._with-tooltip"
    ),
  });

  const input = cssContainer.querySelector(".admin__control-textarea");
  const inputVal = input.value;
  const updateInput = ({ newCss, previousVersion, onLoad }) => {
    if (previousVersion && inputVal.includes(previousVersion)) {
      input.value = inputVal.replace(previousVersion, "");
    }

    if (!inputVal.includes(newCss) || onLoad) {
      input.value = newCss.trim() + input.value;
    } else {
      input.value = inputVal.replace(newCss, "");
    }
    const e = new Event("change");
    const element = document.querySelector(".admin__control-textarea");
    element.dispatchEvent(e);
  };
  const mainCss_currVers = cssSnippets.mainCss.match(/\d+/g)[0];
  const mainCss_lpVers = inputVal
    .substr(inputVal.indexOf("mainCss start v"), 50)
    .match(/\d+/g)[0];
  const mainCssPreviousVersion_Start = `/* >> mainCss start v${mainCss_lpVers} >> >> >> */`;
  const mainCssPreviousVersion_End = `/* << << << mainCss end << */`;
  const mainCss_previousVersion = inputVal.substring(
    inputVal.indexOf(mainCssPreviousVersion_Start),
    inputVal.indexOf(mainCssPreviousVersion_End) +
      mainCssPreviousVersion_End.length
  );
  if (mainCss_lpVers < mainCss_currVers || inputVal === "") {
    updateInput({
      newCss: cssSnippets.mainCss,
      previousVersion: mainCss_previousVersion,
      onLoad: true,
    });
  }

  chillBtns.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (i === 0) {
        updateInput({
          newCss: cssSnippets.mainCss,
          previousVersion: mainCss_previousVersion,
        });
      } else if (i === 1) {
        updateInput({ newCss: cssSnippets.hideNumbersInSideTips });
      } else if (i === 2) {
        updateInput({ newCss: cssSnippets.greenApla });
      } else if (i === 3) {
        updateInput({ newCss: cssSnippets.payback });
      } else if (i === 4) {
        updateInput({
          newCss: cssSnippets.singleCategoryInOldMenu,
        });
      } else if (i === 5) {
        updateInput({ newCss: cssSnippets.bannerColor });
      }
    });
  });
  if (document.querySelector(".admin__collapsible-title._changed")) {
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
