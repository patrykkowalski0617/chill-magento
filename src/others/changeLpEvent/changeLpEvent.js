const changeLpEvent = () => {
  const table = document.querySelector(".admin__data-grid-outer-wrap");
  table.addEventListener("click", (e) => {
    const row = e.target.parentNode;
    if (row.classList.contains("data-row")) {
      row.querySelector(".action-menu > :first-child a").click();
    } else if (row.parentNode.classList.contains("data-row")) {
      row.parentNode.querySelector(".action-menu > :first-child a").click();
    }
  });
};

export default changeLpEvent;
