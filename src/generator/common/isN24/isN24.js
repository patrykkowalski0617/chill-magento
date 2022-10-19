const isN24 = () => {
  const shopSelect = document.querySelector(".admin__control-select");

  switch (shopSelect.value) {
    case "1":
      return false;
    case "2":
      return true;
    default:
      console.log("isNeo24: shop was not recognized");
      return false;
  }
};

export default isN24;
