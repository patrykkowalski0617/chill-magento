import "./renderFixButtons.scss";

// Renders buttons in module. Returns buttons
const renderFixButtons = ({
  generatorModule,
  actions,
  otherRenderContainer,
}) => {
  const container = otherRenderContainer
    ? otherRenderContainer
    : generatorModule.querySelector(".module__content");

  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="chill-btn-container">
             ${
               actions
                 ? actions
                     .map(
                       (action) =>
                         `<button class='chill-btn'>${action}</button>`
                     )
                     .join("")
                 : console.error("No actions provide")
             }
            </div>`
  );
  return generatorModule.querySelectorAll(".chill-btn");
};

export default renderFixButtons;
