import "./darkMode.scss";

const darkMode = () => {
  let darkMode = JSON.parse(localStorage.getItem("magentoChill_darkMode"));
  if (darkMode === null) {
    darkMode = false;
    localStorage.setItem("magentoChill_darkMode", darkMode);
  }
};

export default darkMode;
