const listingId = (module) => {
  const promotionIdInput = module.querySelector(
    "[id^=products_new_promotion_id_]"
  );
  const weekDealInput = module.querySelector(
    "[id^=products_new_is_week_deal_]"
  );
  promotionIdInput.classList.remove("chill-mark-input-strong");
  if (!promotionIdInput.value && !weekDealInput.checked) {
    promotionIdInput.classList.add("chill-mark-input-strong");
    const isEmptyInput = alert("Pusty input 'promotion_id'!");
    return isEmptyInput;
  }
};

export default listingId;
