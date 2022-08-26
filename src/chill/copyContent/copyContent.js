import "./copyContent.scss";

const copyContent = (el) => {
  const txt = el.innerText.length ? el.innerText : el.value;
  navigator.clipboard.writeText(txt);
  el.classList.add("chill-copied");
  setTimeout(() => {
    el.classList.remove("chill-copied");
  }, 2000);
};

export default copyContent;
