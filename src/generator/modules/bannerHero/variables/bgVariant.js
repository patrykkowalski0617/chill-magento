const bgVariant = (module) => {
  const inputContainers = module.querySelectorAll(
    ".module__content.module__form .module__element.module__element_half"
  );
  const oryginalInput = module.querySelector(
    ".module__banner_hero .module__content.module__form > div:nth-child(14)"
  );

  const oryginalInputHTML = oryginalInput.innerHTML;

  inputContainers[4].style.width = "43%";
  inputContainers[5].style.width = "43%";

  inputContainers[5].insertAdjacentHTML(
    "afterend",
    `<div class="chill-fake-input-bg_variant">${oryginalInputHTML}</div>`
  );

  module.querySelector(".chill-fake-input-bg_variant label").innerHTML =
    "Jasny wariant kolorystyczny";
  module.querySelector(
    ".chill-fake-input-bg_variant .checkbox-text"
  ).innerHTML = "";
  oryginalInput.remove();
};

export default bgVariant;
