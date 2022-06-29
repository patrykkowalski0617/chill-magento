import "./generatorShortcut.scss";

const generatorShortcut = () => {
  const lpBtn = document.querySelector(
    '[data-ui-id^="menu-global4net-landingpage-pages"] a'
  );
  const nav = document.querySelector("#nav");
  if (nav) {
    nav.insertAdjacentHTML(
      "beforeend",
      `
    <li
      id="chill-generator-shortcut"
      data-ui-id="menu-magento-backend-content"
      class="item-content _current parent level-0 chill-shortcut"
      role="menu-item"
    >
      <a href="#" onclick="return false;" class=""><span>eLPeki</span></a>
    </li>
`
    );
    document
      .querySelector("#chill-generator-shortcut")
      .addEventListener("click", () => {
        lpBtn.click();
      });
  }
};
export default generatorShortcut;
