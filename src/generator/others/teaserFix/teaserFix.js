import { forceChangeEvent } from "../../../chill";

const teaserFix = () => {
  const input = document.querySelector("[name=use_teaser]");
  const label = document.querySelector("[name=use_teaser] + label");

  label.addEventListener("click", () => {
    setTimeout(() => {
      if (input.checked) {
        const select = document.querySelector("[name=clock_type]");
        select.selectedIndex = 4;
        forceChangeEvent("[name=clock_type]");
      }
    }, 0);
  });
};

export default teaserFix;
