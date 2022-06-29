import { runScriptForElement } from "../../chill";

const sortLpList = () => {
  const sortLpList = () => {
    const lpSort = document.querySelector(
      "#container > div > div.admin__data-grid-wrap > table > thead > tr > th.data-grid-th._sortable._draggable._ascend"
    );
    lpSort.click();
  };

  runScriptForElement(
    "#container > div > div.admin__data-grid-wrap > table > tbody > tr:nth-child(1) > td:nth-child(2) > div",
    sortLpList
  );
};
export default sortLpList;
