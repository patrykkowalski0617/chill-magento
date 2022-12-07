const clearTextAreaOnKey = (textarea, txt = "", isBug) => {
  if (txt.length) {
    setTimeout(() => {
      textarea.value = txt;
      if (isBug) {
        textarea.classList.add("custom-input-warn");
      }
    }, 200);
    setTimeout(() => {
      textarea.value = "szczegóły: F12";
    }, 2000);
    setTimeout(() => {
      textarea.value = "";
      if (isBug) {
        textarea.classList.remove("custom-input-warn");
      }
    }, 3800);
  } else {
    setTimeout(() => {
      textarea.value = "";
    }, 200);
  }
};
export default clearTextAreaOnKey;
