import "./hideElements.scss";

const hideElements = ({ module }) => {
  module.classList.toggle("listing-show-hidden-elements");
  module
    .querySelector(".chill-btn-container button:nth-child(5)")
    .classList.toggle("change-btn-txt");
};

export default hideElements;
