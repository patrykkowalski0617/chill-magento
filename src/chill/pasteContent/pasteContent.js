const pasteContent = (el) => {
  navigator.clipboard.readText().then((clipText) => {
    el.value = clipText;
  });
};

export default pasteContent;
