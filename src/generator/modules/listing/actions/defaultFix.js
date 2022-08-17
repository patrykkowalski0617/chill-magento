import {
  bezpiecznikDateDefaultValue,
  textAreaDefaultText,
  selectors,
} from "../variables";
import { nnColors } from "../../../../chill";

const defaultFix = (module) => {
  bezpiecznikDateDefaultValue(module);
  textAreaDefaultText(module);

  module
    .querySelectorAll(`${selectors.features}, ${selectors.badgeAdserver}`)
    .forEach((el) => {
      if (!el.checked) {
        el.click();
      }
    });

  const el = module.querySelector(selectors.sorting);
  const setCheckbox = (el, shouldBeOff) => {
    if (shouldBeOff) {
      el.click();
    }
  };
  if (module.querySelector('[id^="products_template"]').value !== "slider") {
    setCheckbox(el, !el.checked);
  } else {
    setCheckbox(el, el.checked);
  }

  module
    .querySelectorAll(
      `${selectors.priceColor}, ${selectors.couponColorBg}, ${selectors.sortingArrow}`
    )
    .forEach((el) => {
      el.value = nnColors.red;
    });
  module
    .querySelectorAll(
      `${selectors.color}, ${selectors.savePriceColor}, ${selectors.sortingColor1}, ${selectors.sortingColor2}, ${selectors.sortingBorder}`
    )
    .forEach((el) => {
      el.value = nnColors.black;
    });
  module.querySelectorAll(`${selectors.oldPriceColor}`).forEach((el) => {
    el.value = nnColors.gray;
  });
  module
    .querySelectorAll(
      `${selectors.bgColor}, ${selectors.couponColor}, ${selectors.sortingColorBg}`
    )
    .forEach((el) => {
      el.value = nnColors.white;
    });
};

export default defaultFix;
