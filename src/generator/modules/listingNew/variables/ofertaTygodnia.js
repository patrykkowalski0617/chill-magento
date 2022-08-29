import { markInputs } from "../../../../chill";

const ofertaTygodnia = (module) => {
  const topProductsSwitch = module.querySelectorAll(
    '[for^="products_new_is_week_deal_"]'
  )[1];
  topProductsSwitch.addEventListener("click", () => {
    const title = module.querySelector('[id^="products_new_list_title_"]');
    const color = module.querySelector(
      '[id^="products_new_color_background_"] + input'
    );
    const colorPicker = module.querySelector(
      '[id^="products_new_color_background_"]'
    );
    title.value = "POLECANE PRODUKTY";
    color.value = "#d3dde1";
    colorPicker.value = "#d3dde1";
    markInputs([title, color, colorPicker]);
  });
};

export default ofertaTygodnia;
