const navInspect = ({
  elementsSelector,
  animationClassName,
  animOnload = true,
}) => {
  const synopsisBtns = document.querySelectorAll(
    ".chill-generator-synopsis-btn"
  );
  const addAnimationCSSClass = (eventlHandler) => {
    const elements = document.querySelectorAll(`${elementsSelector}`);
    const docTop = window.pageYOffset;
    const winH = window.innerHeight;
    const offsetTop = (element) => element.getBoundingClientRect().top + docTop;
    if (document.querySelectorAll(".module__bar-in-view-port")) {
      document.querySelectorAll(".module__bar-in-view-port").forEach((el) => {
        el.classList.remove("module__bar-in-view-port");
      });
    }

    const synopsisBtnsArr = Array.from(elements).map((element, i) => {
      return { bar: element, synopsisBtn: synopsisBtns[i + 1] };
    });
    const elementInViewProt = synopsisBtnsArr.find(({ bar }) => {
      return (
        offsetTop(bar) < docTop + winH - 70 && offsetTop(bar) > docTop + 77
      );
    });
    if (elementInViewProt && elementInViewProt.synopsisBtn) {
      elementInViewProt.synopsisBtn.classList.add(animationClassName);
    }

    if (elements.length === 0) {
      window.removeEventListener("scroll", eventlHandler);
    }
  };

  const eventThrottle = (() => {
    let timeoutId;
    return (callback) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback();
      }, 20);
    };
  })();

  const scrollHandler = () => {
    eventThrottle(() => {
      addAnimationCSSClass(scrollHandler);
    });
  };

  window.addEventListener("scroll", scrollHandler);

  if (!animOnload) return;
  addAnimationCSSClass();
};

export default navInspect;
