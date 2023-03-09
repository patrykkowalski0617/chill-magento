const selectors = {
  // Checkboxes
  features: 'input[id^="products_feature"]:not([type="text"])',
  badgeAdserver:
    'input[id^="products_badge"]:not([id^="products_badge_generated"]):not([type="text"])',
  // sorting: 'input[id^="products_sorting"]',
  dynaminPage: 'input[id^="products_dynamic_page_"]:not([type="text"])',
  // Colors
  bgColor:
    '[id^="products_color_background"], [id^="products_color_background"] + input',
  color: '[id^="products_color_font"], [id^="products_color_font"] + input',
  couponColor:
    '[id^="products_coupon_code_color_font"], [id^="products_coupon_code_color_font"] + input',
  couponColorBg:
    '[id^="products_coupon_code_color_background"], [id^="products_coupon_code_color_background"] + input',
  priceColor:
    '[id^="products_price_new_color"], [id^="products_price_new_color"] + input',
  oldPriceColor:
    '[id^="products_price_old_color"], [id^="products_price_old_color"] + input',
  savePriceColor:
    '[id^="products_price_save_color"], [id^="products_price_save_color"] + input',
  sortingColorBg:
    '[id^="products_sort_background"], [id^="products_sort_background"] + input',
  sortingColor1:
    '[id^="products_sort_color_1"], [id^="products_sort_color_1"] + input',
  sortingColor2:
    '[id^="products_sort_color_2"], [id^="products_sort_color_2"] + input',
  sortingBorder:
    '[id^="products_sort_border"], [id^="products_sort_border"] + input',
  sortingArrow:
    '[id^="products_sort_arrow"], [id^="products_sort_arrow"] + input',
  // Textareas
  gidInput: '[id^="products_products"], [id^="products_new_products"]',
  // Date
  dateInput:
    '[id^="clock_min_price_from_date"], [id^="products_new_min_price_from_date"]',
  timeInput:
    '[id^="products_min_price_from_hour"], [id^="products_new_min_price_from_hour"]',
};

export default selectors;
