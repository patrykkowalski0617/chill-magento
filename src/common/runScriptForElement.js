const runScriptForElement = (requiredElementSelector, callback) => {
  const observerOptions = {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true,
    subtree: true,
  };

  let wasTheScriptRun = false;
  const runScript = (observer) => {
    wasTheScriptRun = true;
    observer.disconnect();
    callback();
  };
  const observer = new MutationObserver((mutation) => {
    const requiredElement = document.querySelector(requiredElementSelector);
    if (requiredElement && !wasTheScriptRun) {
      runScript(observer);
    }
  });
  observer.observe(document.body, observerOptions);
};

export default runScriptForElement;
