const manageFilterURL = () => {
  const urlInput = document.querySelector('[name="url"]');

  if (urlInput) {
    urlInput.addEventListener("paste", (e) => {
      const value = e.clipboardData.getData("Text");
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
  }
};
export default manageFilterURL;
