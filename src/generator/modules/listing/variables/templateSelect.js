import minNumOfGidsForSorting from "./minNumOfGidsForSorting";

const templateSelect = (module) => {
  const templateSelect = module.querySelector("[id^=products_template_]");
  templateSelect.addEventListener("change", (e) => {
    const numOfGids =
      module.querySelector("textarea[id^=products_products_]").value.split(";")
        .length - 1;
    const sortingLabel = module.querySelector("[for^=products_sorting_]");
    const sortingInputVal = module.querySelector(
      "[id^=products_sorting_]"
    ).checked;
    if (e.target.value === "slider" && sortingInputVal) {
      sortingLabel.click();
    } else if (
      e.target.value !== "slider" &&
      !sortingInputVal &&
      numOfGids > minNumOfGidsForSorting
    ) {
      sortingLabel.click();
    }
  });
};

export default templateSelect;
