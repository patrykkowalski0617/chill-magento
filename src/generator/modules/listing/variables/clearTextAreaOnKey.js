const clearTextAreaOnKey = (textarea) => {
  setTimeout(() => {
    textarea.value = "";
  }, 200);
};
export default clearTextAreaOnKey;
