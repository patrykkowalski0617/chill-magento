import "./stickyModuleHeaders.scss";
import { eventThrottle } from "../../../chill";

const stickyModuleHeaders = () => {
  const modules = document.querySelectorAll(".module ");

  function manageSticky() {
    modules.forEach((module) => {
      const moduleContent = module.querySelector(".module__content");
      const sticky = moduleContent.offsetTop;

      if (window.pageYOffset + 100 > sticky) {
        module.classList.add("sticky");
      } else {
        module.classList.remove("sticky");
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
