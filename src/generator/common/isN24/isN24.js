const isN24 = () => {
  const shopSelect = document.querySelector(".admin__control-select");
  if (shopSelect) {
    switch (shopSelect.value) {
      case "1":
        return false;
      case "2":
        return true;
      default:
        console.error("isNeo24: shop was not recognized");
        return false;
    }
  } else {
    console.error("shopSelect is undefined");
    return false;
  }
};

export default isN24;
