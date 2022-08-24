const updateModuleTitle = (module, moduleName) => {
  const textareaValue = module.querySelector("textarea").value;
  const titleStart =
    textareaValue.indexOf("<!--") > -1
      ? textareaValue.indexOf("<!--") + 4
      : null;
  const titleEnd =
    textareaValue.indexOf("-->") > -1 ? textareaValue.indexOf("-->") : null;
  const htmlTitle = textareaValue.substring(titleStart, titleEnd);
  const moduleTitleEl = module.querySelector(".module__title");

  if (htmlTitle.length <= 50 && !htmlTitle.includes("<")) {
    moduleTitleEl.innerHTML = `${moduleName} ${htmlTitle}`;
  } else {
    moduleTitleEl.innerHTML = moduleName;
  }
};

export default updateModuleTitle;
