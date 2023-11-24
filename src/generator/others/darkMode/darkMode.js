import isLogin from "../../../chill/isLogin/isLogin";
import "./darkMode.scss";

const darkMode = () => {
  let darkMode = JSON.parse(localStorage.getItem("magentoChill_darkMode"));

  if (darkMode === null) {
    darkMode = isLogin() ? true : false;
    if (isLogin()) document.body.classList.add("chill-dark-mode");
    localStorage.setItem("magentoChill_darkMode", darkMode);
  } else if (darkMode === true) {
    document.body.classList.add("chill-dark-mode");
  }
};

export default darkMode;
