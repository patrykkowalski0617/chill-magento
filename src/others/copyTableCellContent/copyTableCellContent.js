import "./copyTableCellContent.scss";
import { copyContent } from "../../chill";

const copyTableCellContent = () => {
  const table = document.querySelector(".admin__data-grid-outer-wrap");

  table.addEventListener("click", (e) => {
    if (e.altKey) {
      copyContent(e.target);
    }
  });
  table.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    copyContent(e.target);
  });
};
export default copyTableCellContent;
