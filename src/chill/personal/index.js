const personal = (callback) => {
  const userName = "patkowalski";
  const accountText = document.querySelector(".admin-user-account-text");
  const isLogin = accountText && accountText.textContent === userName;
  if (isLogin) {
    callback();
  }
};

export default personal;
