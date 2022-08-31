import { markInputs } from "../../../../chill";
import {
  bezpiecznikDateDefaultValue,
  fillCouponCode,
  textAreaDefaultText,
} from "../../listing/variables";

const defaultFix = (module) => {
  bezpiecznikDateDefaultValue(module);
  textAreaDefaultText(module);
  const maximumItemsInput = module.querySelector(
    "[id^=products_new_max_products_per_category_]"
  );

  maximumItemsInput.value = 7;

  markInputs([maximumItemsInput]);

  fillCouponCode(module);
};

export default defaultFix;
