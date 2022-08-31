const clearTextAreaOnKey = (textarea, txt = "") => {
  if (txt.length) {
    setTimeout(() => {
      textarea.value = txt;
    }, 200);
    setTimeout(() => {
      textarea.value = "szczegóły: F12";
    }, 1000);
    setTimeout(() => {
      textarea.value = "";
    }, 1800);
  } else {
    setTimeout(() => {
      textarea.value = "";
    }, 200);
  }
};
export default clearTextAreaOnKey;
