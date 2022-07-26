const clickBarToCollapse = () => {
  document.querySelectorAll(".module__bar").forEach((el) => {
    if (!el.classList.contains("collapse-ready")) {
      el.classList.add("collapse-ready");
      el.addEventListener("click", (e) => {
        e.preventDefault();
        el.querySelector(".btn_toggle").click();
      });
    }
  });
};

export default clickBarToCollapse;
