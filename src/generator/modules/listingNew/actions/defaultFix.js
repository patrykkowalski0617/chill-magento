import { markInputs } from "../../../../chill";
import {
  bezpiecznikDateDefaultValue,
  textAreaDefaultText,
} from "../../listing/variables";

const defaultFix = (module) => {
  bezpiecznikDateDefaultValue(module);
  textAreaDefaultText(module);
  const maximumItemsInput = module.querySelector(
    "[id^=products_new_max_products_per_category_]"
  );
  const codeInput = module.querySelector("[id^=products_new_coupon_code_]");
  const codeInputSource = document.querySelector(
    "[id^=banner_hero_promo_code_]"
  );

  maximumItemsInput.value = 7;
  if (codeInputSource) {
    codeInput.value = codeInputSource.value;
    markInputs([codeInput]);
  }
  markInputs([maximumItemsInput]);
};

export default defaultFix;
