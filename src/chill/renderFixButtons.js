import "./renderFixButtons.scss";

// Renders buttons in module. Returns buttons
const renderFixButtons = ({
  generatorModule,
  actions,
  otherRenderContainer,
}) => {
  const container = otherRenderContainer
    ? otherRenderContainer
    : generatorModule.querySelector(".module__content .chill-btn-container");

  container.insertAdjacentHTML(
    "afterbegin",
    `
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
            `
  );
  return container.querySelectorAll(".chill-btn");
};

export default renderFixButtons;
