import "./hideElements.scss";

const hideElements = ({ module }) => {
  module.classList.toggle("bannerHero-show-hidden-elements");
  module
    .querySelector(".chill-btn-container button:nth-child(4)")
    .classList.toggle("change-btn-txt");
};

export default hideElements;