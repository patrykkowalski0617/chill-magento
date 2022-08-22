import "./stickyModuleHeaders.scss";
import { eventThrottle } from "../../../chill";

const stickyModuleHeaders = () => {
  const modules = document.querySelectorAll(".module ");

  function manageSticky() {
    modules.forEach((module, i) => {
      const moduleContent = module.querySelector(".module__content");
      const sticky = moduleContent.offsetTop;

      if (window.pageYOffset + 150 > sticky) {
        module.classList.add("sticky");
      } else {
        module.classList.remove("sticky");
      }
      const elementsAboveViewport = document.querySelectorAll(".sticky");
      if (elementsAboveViewport.length) {
        document
          .querySelectorAll(".sticky-msg")
          .forEach((el) => el.classList.remove("sticky-msg"));
        elementsAboveViewport[elementsAboveViewport.length - 1].classList.add(
          "sticky-msg"
        );
      }
    });
  }

  const scrollHandler = () => {
    eventThrottle(() => {
      manageSticky();
    });
  };

  window.addEventListener("scroll", scrollHandler);
};

export default stickyModuleHeaders;
