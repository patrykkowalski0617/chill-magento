const forceChangeEvent = (selector) => {
  const e = new Event("change");
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => element.dispatchEvent(e));
};
export default forceChangeEvent;
