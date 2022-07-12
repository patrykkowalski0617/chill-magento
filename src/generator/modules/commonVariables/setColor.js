const setColor = (el, color) => {
  if (el.value !== color) {
    el.value = color;
    el.classList.add("filled");
  } else {
    el.classList.add("touched");
  }
};
export default setColor;
