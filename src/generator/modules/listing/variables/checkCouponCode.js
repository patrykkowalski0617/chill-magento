const checkCouponCode = (module) => {
  const inpt = module.querySelector(
    "[id^=products_coupon_code_], [id^=products_new_coupon_code_]"
  );

  const XYinptVal = module.querySelector(
    "[id^=products_x_for_y_promo_], [id^=products_new_x_for_y_promo_]"
  ).checked;
  const gids = module.querySelector(
    "[id^=products_new_products_], [id^=products_products_]"
  ).value;
  inpt.classList.remove("chill-mark-input-strong");
  if (
    !inpt.value.length &&
    (gids.includes("p") || gids.includes("r") || XYinptVal)
  ) {
    inpt.classList.add("chill-mark-input-strong");
    const isEmptyInput = alert("Pusty input 'coupon code'!");
    return isEmptyInput;
  }
};

export default checkCouponCode;
