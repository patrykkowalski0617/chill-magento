const inputFileFix = (module) => {
  const spansInLabels = module.querySelectorAll(
    `[for^="parameters[additional_images]"] > span:not(.chill-click-event-added),
    [for^="parameters[steps]"] > span:not(.chill-click-event-added)`
  );
  spansInLabels.forEach((el) => {
    el.classList.add("chill-click-event-added");
    el.addEventListener("click", () => {
      el.parentElement.click();
    });
  });
};
export default inputFileFix;
