import {
  bezpiecznikDateDefaultValue,
  textAreaDefaultText,
  selectors,
} from "../variables";
import { markInputs, nnColors } from "../../../../chill";

const defaultFix = (module) => {
  bezpiecznikDateDefaultValue(module);
  textAreaDefaultText(module);

  const checkboxes = module.querySelectorAll(
    `${selectors.features}, ${selectors.badgeAdserver}, ${selectors.dynaminPage}`
  );
  checkboxes.forEach((el) => {
    if (!el.checked) {
      el.click();
    }
  });

  const el = module.querySelector(selectors.sorting);
  const setCheckbox = (el, shouldBeOff) => {
    if (shouldBeOff) {
      el.click();
      markInputs([el]);
    }
  };
  if (module.querySelector('[id^="products_template"]').value !== "slider") {
    setCheckbox(el, !el.checked);
  } else {
    setCheckbox(el, el.checked);
  }

  const redInputs = module.querySelectorAll(
    `${selectors.priceColor}, ${selectors.couponColorBg}, ${selectors.sortingArrow}`
  );
  const blackInputs = module.querySelectorAll(
    `${selectors.color}, ${selectors.savePriceColor}, ${selectors.sortingColor1}, ${selectors.sortingColor2}, ${selectors.sortingBorder}`
  );
  const grayInputs = module.querySelectorAll(`${selectors.oldPriceColor}`);
  const whiteInputs = module.querySelectorAll(
    `${selectors.bgColor}, ${selectors.couponColor}, ${selectors.sortingColorBg}`
  );

  redInputs.forEach((el) => {
    el.value = nnColors.red;
  });
  blackInputs.forEach((el) => {
    el.value = nnColors.black;
  });
  grayInputs.forEach((el) => {
    el.value = nnColors.gray;
  });
  whiteInputs.forEach((el) => {
    el.value = nnColors.white;
  });

  const codeInput = module.querySelector(
    "[id^=products_new_coupon_code_], [id^=products_coupon_code_]"
  );
  const codeInputSource = document.querySelector(
    "[id^=banner_hero_promo_code_]"
  );
  if (codeInputSource) {
    codeInput.value = codeInputSource.value;
    markInputs([codeInput]);
  }

  markInputs([
    ...redInputs,
    ...blackInputs,
    ...grayInputs,
    ...whiteInputs,
    ...Array.from(checkboxes).map((checkboxe) => checkboxe.parentElement),
  ]);
};

export default defaultFix;
