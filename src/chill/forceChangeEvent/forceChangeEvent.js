const forceChangeEvent = (selector) => {
  const e = new Event("change");
  const element = document.querySelector(selector);
  element.dispatchEvent(e);
};
export default forceChangeEvent;
