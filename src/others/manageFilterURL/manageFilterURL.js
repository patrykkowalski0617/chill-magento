const manageFilterURL = () => {
  const urlInput = document.querySelector('[name="url"]');
  const formatURL = () => {
    navigator.clipboard.readText().then((value) => {
      if (value.includes("/") || value.includes(".")) {
        const _a = value.lastIndexOf("/");
        const _b = value.lastIndexOf(".");
        const a = _a === -1 ? 0 : _a + 1;
        const b = _b < a ? value.length : _b;
        const newValue = value.substring(a, b);
        setTimeout(() => {
          urlInput.value = newValue;
        }, 0);
      }
    });
  };
  if (urlInput) {
    urlInput.addEventListener("paste", formatURL);
    urlInput.addEventListener("dblclick", formatURL);
  }
};
export default manageFilterURL;
