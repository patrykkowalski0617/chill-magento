const bgVariant = (module) => {
  const inputContainers = module.querySelectorAll(
    ".module__content.module__form .module__element.module__element_half"
  );

  inputContainers[4].style.width = "43%";
  inputContainers[5].style.width = "43%";
  inputContainers[5].insertAdjacentHTML(
    "afterend",
    `
<div>
  <label class="module__label" for="banner_hero-chill-_timer_bg_variant">Wariant kolorystyczny</label>
  <div class="checkbox-container" style="display: flex; align-items: center; margin-bottom: 20px;">
      <label class="custom-checkbox" for="banner_hero-chill-_timer_bg_variant">
          <input class="input__checkbox" id="banner_hero-chill-_timer_bg_variant" checked-text="Jasny" unchecked-text="Ciemny" type="checkbox" name="parameters[timer_bg_variant]" checked="">
          <div class="custom-checkbox__slider round chill-bg_variant"></div>
      </label>
      <div style="margin-left:5px" class="checkbox-text">Jasny</div>
  </div>             
</div>
  `
  );

  module
    .querySelector(".chill-bg_variant:not(.click-added)")
    .addEventListener("click", () => {
      console.log("click");
      module
        .querySelector('[for^="banner_hero_timer_bg_variant_"] > div')
        .click();
    });
  module.querySelector(".chill-bg_variant").classList.add("click-added");
};

export default bgVariant;
