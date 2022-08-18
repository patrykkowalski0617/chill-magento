import "./hideSubcategories.scss";

const hideSubcategories = (module) => {
  module.classList.toggle("menu-hide-subcategories");
  module
    .querySelector(".chill-btn-container button:nth-child(4)")
    .classList.toggle("change-btn-txt");
};

export default hideSubcategories;
