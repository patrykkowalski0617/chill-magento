import "./openLpAndEditLp.scss";
import { onElementReady } from "../../chill";

const openLpAndEditLp = () => {
  document.body.classList.add("hide-first-element-in-action-menu");
  const openLpEvent = (e) => {
    e.preventDefault();
    const domainEl =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(
        ":nth-child(4)"
      );
    const lpEl =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(
        ":nth-child(3)"
      );

    const domain = domainEl.innerText;
    const lp = lpEl.innerText;
    if (domain.includes("24")) {
      window.open(`https://www.neo24.pl/lpage/${lp}.html`, "_blank");
    } else if (domain.includes("Neonet")) {
      window.open(`https://www.neonet.pl/lpage/${lp}.html`, "_blank");
    }
  };

  const openLp = () => {
    const addOpenBtn = (el) => {
      if (!el.querySelector(".action-menu-item.open")) {
        el.insertAdjacentHTML(
          "beforeend",
          `<li>
                    <a class="action-menu-item open" target="_blank" href="">Podgląd</a>
                  </li>`
        );
        el.querySelector(".action-menu-item.open").removeEventListener(
          "click",
          openLpEvent
        );
        el.querySelector(".action-menu-item.open").addEventListener(
          "click",
          openLpEvent
        );
      }
    };
    document.querySelectorAll(".data-row .action-menu").forEach((el) => {
      addOpenBtn(el);
    });
  };
  const openLpRest = () => {
    setTimeout(openLp, 1000);
  };
  onElementReady('[data-action="grid-filter-reset"]', () => {
    const clearBtn = document.querySelector(
      '[data-action="grid-filter-reset"]'
    );

    clearBtn.removeEventListener("click", openLpRest);
    clearBtn.addEventListener("click", openLpRest);
  });
  onElementReady("[data-action='grid-filter-apply']", () => {
    const applyFilter = document.querySelector(
      "[data-action='grid-filter-apply']"
    );

    applyFilter.removeEventListener("click", openLpRest);
    applyFilter.addEventListener("click", openLpRest);
  });
  onElementReady('[name="url"]', () => {
    document.querySelector('[name="url"]').addEventListener("keyup", (e) => {
      if (e.which === 13) {
        openLpRest();
      }
    });
  });

  const changeLpEvent = () => {
    const table = document.querySelector(".admin__data-grid-outer-wrap");
    table.addEventListener("click", (e) => {
      if (!e.altKey) {
        const row = e.target.parentNode;
        if (row.classList.contains("data-row")) {
          row.querySelector(".action-menu > :first-child a").click();
        } else if (row.parentNode.classList.contains("data-row")) {
          row.parentNode.querySelector(".action-menu > :first-child a").click();
        }
      }
    });
  };

  openLp();

  changeLpEvent();
};

export default openLpAndEditLp;
