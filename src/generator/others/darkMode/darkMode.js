import "./darkMode.scss";

const darkMode = () => {
  let darkMode = JSON.parse(localStorage.getItem("magentoChill_darkMode"));

  if (darkMode === null) {
    darkMode = true;
    localStorage.setItem("magentoChill_darkMode", darkMode);
    document.body.classList.add("chill-dark-mode");
  } else if (darkMode === true) {
    document.body.classList.add("chill-dark-mode");
  }
};

export default darkMode;
