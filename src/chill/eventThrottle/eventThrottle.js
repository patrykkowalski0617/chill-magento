const eventThrottle = (() => {
  let timeoutId;
  return (callback) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback();
    }, 10);
  };
})();
export default eventThrottle;
