import "./copyTableCellContent.scss";
import { copyContent } from "../../chill";
const copyTableCellContent = () => {
  const table = document.querySelector(".admin__data-grid-outer-wrap");

  table.addEventListener("click", (e) => {
    if (e.target.classList.contains("data-grid-cell-content") && e.ctrlKey) {
      copyContent(e.target);
    }
  });
};
export default copyTableCellContent;
