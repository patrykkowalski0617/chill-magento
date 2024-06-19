import { onElementReady } from "../../chill";

const sortList = () => {
  const sortList = () => {
    const lpSort = document.querySelector(
      "#container > div > div.admin__data-grid-wrap > table > thead > tr > th.data-grid-th._sortable._draggable._ascend"
    );
    lpSort.click();
  };

  onElementReady(
    "#container > div > div.admin__data-grid-wrap > table > tbody > tr:nth-child(1) > td:nth-child(2) > div",
    sortList
  );
};
export default sortList;
