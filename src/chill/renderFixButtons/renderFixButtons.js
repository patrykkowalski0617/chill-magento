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
  const btns = [];
  actions.forEach((action) => {
    const btn = document.createElement("button");
    btn.classList.add("chill-btn");
    if (action === "defaultFixInvisible") {
      btn.classList.add("chill-btn-invisible");
    }
    btn.innerHTML = action;
    container.appendChild(btn);
    btns.push(btn);
  });

  return btns;
};

export default renderFixButtons;
