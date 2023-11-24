const isLogin = (callback) => {
  const userName = "patkowalski";
  const accountText = document.querySelector(".admin-user-account-text");
  const isLogin = accountText && accountText.textContent === userName;
  if (callback && isLogin) {
    callback();
  }
  return isLogin;
};

export default isLogin;
