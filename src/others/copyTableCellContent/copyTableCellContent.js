import "./copyTableCellContent.scss";
import { copyContent } from "../../chill";

const copyTableCellContent = () => {
  const tableDataEls = Array.from(
    document.querySelectorAll(".admin__data-grid-outer-wrap td")
  );
  tableDataEls.forEach((tableDataEl) => {
    tableDataEl.addEventListener("click", (e) => {
      if (e.altKey) {
        copyContent(e.target);
      }
    });
    tableDataEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      copyContent(e.target);
    });
  });
};
export default copyTableCellContent;
