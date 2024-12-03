import "./stickyModuleHeaders.scss";
import { eventThrottle } from "../../../chill";

const stickyModuleHeaders = () => {
  const modules = document.querySelectorAll(".module");
  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "s") {
      e.preventDefault();
      document
        .querySelector(".sticky-last-element .chill-btn.save.save-btn")
        .click();
    }
  });
  function manageSticky() {
    modules.forEach((module, i) => {
      const moduleContent = module.querySelector(".module__content");
      const sticky = moduleContent.offsetTop;

      if (window.pageYOffset + 200 > sticky) {
        module.classList.add("sticky");
      } else {
        module.classList.remove("sticky");
      }
      const elementsAboveViewport = document.querySelectorAll(".sticky");
      if (elementsAboveViewport.length) {
        // mark last sticky header
        document
          .querySelectorAll(".sticky-last-element")
          .forEach((el) => el.classList.remove("sticky-last-element"));
        elementsAboveViewport[elementsAboveViewport.length - 1].classList.add(
          "sticky-last-element"
        );
        // mark synopsis btn
        document
          .querySelectorAll(".synopsis-btn-mark")
          .forEach((el) => el.classList.remove("synopsis-btn-mark"));
        document
          .querySelectorAll(".chill-generator-synopsis-btn:not(.page-top)")
          [elementsAboveViewport.length - 1].classList.add("synopsis-btn-mark");
      } else {
        document
          .querySelectorAll(".synopsis-btn-mark")
          .forEach((el) => el.classList.remove("synopsis-btn-mark"));
      }
    });
  }

  const scrollHandler = () => {
    eventThrottle(() => {
      manageSticky();
    });
  };

  window.removeEventListener("scroll", scrollHandler);
  window.addEventListener("scroll", scrollHandler);
};

export default stickyModuleHeaders;
