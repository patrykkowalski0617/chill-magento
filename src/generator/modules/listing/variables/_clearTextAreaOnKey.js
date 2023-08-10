const _clearTextAreaOnKey = (btn, txt = "", isBug) => {
  const oryginalBtnTxt = btn.innerHTML;
  if (txt.length) {
    btn.innerHTML = txt;
    setTimeout(() => {
      btn.innerHTML = txt;
      if (isBug) {
        btn.classList.add("custom-input-warn");
      }
    }, 200);
    setTimeout(() => {
      btn.innerHTML = "szczegóły: F12";
    }, 2000);
    setTimeout(() => {
      btn.innerHTML = oryginalBtnTxt;
      if (isBug) {
        btn.classList.remove("custom-input-warn");
      }
    }, 3800);
  } else {
    setTimeout(() => {
      btn.innerHTML = oryginalBtnTxt;
    }, 200);
  }
};
export default _clearTextAreaOnKey;
