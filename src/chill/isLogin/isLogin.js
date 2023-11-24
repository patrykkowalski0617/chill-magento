import personalSettings from "../../personalSettings";

const isLogin = () => {
  const accountText = document.querySelector(".admin-user-account-text");
  const isLogin =
    accountText && accountText.textContent === personalSettings.userName;
  return isLogin;
};

export default isLogin;
