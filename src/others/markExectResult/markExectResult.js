import "./markExectResult.scss";
import { onElementReady } from "../../chill";

const markExectResult = () => {
  const filterBtn = document.querySelector('[data-action="grid-filter-apply"]');
  const handler = () => {
    const runScript = (selector, callback) => {
      let timeoutId;
      const fn = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          if (
            document.querySelector(selector) &&
            document.querySelector(".admin__data-grid-loading-mask").style
              .display === "none"
          ) {
            callback();
          } else {
            fn();
          }
        }, 150);
      };
      fn();
    };
    runScript('[data-bind="text: preview"]', () => {
      const marked = document.querySelector(".chill-mark");
      const urlValue = document.querySelector(
        '[data-bind="text: preview"]'
      ).innerText;
      if (marked) {
        marked.classList.remove("chill-mark");
      }

      document
        .querySelectorAll(".admin__data-grid-wrap tr td:nth-child(3)")
        .forEach((td) => {
          if (td.innerText === urlValue) {
            td.parentElement.classList.add("chill-mark");
          } else if (marked) {
            marked.classList.remove("chill-mark");
          }
        });
    });
  };

  filterBtn.addEventListener("click", handler);
  onElementReady('[name="url"]', () => {
    document.querySelector('[name="url"]').addEventListener("keyup", (e) => {
      if (e.which === 13) {
        handler();
      }
    });
  });
};

export default markExectResult;
