import "./stickyModuleHeaders.scss";
import { eventThrottle } from "../../../chill";

const stickyModuleHeaders = () => {
  const headers = document.querySelectorAll(
    ".chill-btn-container:not(.page-actions-buttons .chill-btn-container)"
  );

  function manageSticky() {
    headers.forEach((header, i) => {
      const sticky = header.parentElement.offsetTop;

      if (window.pageYOffset + 150 > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
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
