const pgUpPgDown = () => {
  let index = -1;
  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 34 || e.keyCode === 33) {
      e.preventDefault();
      const modules = document.querySelectorAll(".module");

      modules.forEach((module, i) => {
        if (module.classList.contains("sticky")) {
          index = i;
        }
      });
      if (e.keyCode === 33) {
        if (index > 0) {
          modules[index - 1].scrollIntoView();
        } else {
          document.querySelector("#container").scrollIntoView();
          index = -1;
        }
      } else if (e.keyCode === 34 && index < modules.length - 1) {
        modules[index + 1].scrollIntoView();
      }
    }
  });
};
export default pgUpPgDown;
