const renderFixButtonsContainer = (selector) => {
  const containers = document.querySelectorAll(selector);
  containers.forEach((container) => {
    container.insertAdjacentHTML(
      "afterbegin",
      `<div class="chill-btn-container"></div>`
    );
  });
};

export default renderFixButtonsContainer;
