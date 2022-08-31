import { markInputs } from "../../../../chill";

const fillCouponCode = (module) => {
  const codeInput = module.querySelector(
    "[id^=products_new_coupon_code_], [id^=products__]"
  );
  const codeInputSource = document.querySelector(
    "[id^=banner_hero_promo_code_]"
  );
  if (codeInputSource) {
    codeInput.value = codeInputSource.value;
    markInputs([codeInput]);
  }
};

export default fillCouponCode;
