import "./openLpBtn.scss";
import { onElementReady } from "../../chill";

const openLpBtn = () => {
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
      el.insertAdjacentHTML(
        "beforeend",
        `<li>
                    <a class="action-menu-item open" target="_blank" href="">Otwórz</a>
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

  const changeLpEvent = () => {
    const table = document.querySelector(".admin__data-grid-outer-wrap");
    table.addEventListener("click", (e) => {
      const row = e.target.parentNode;
      if (row.classList.contains("data-row")) {
        row.querySelector(".action-menu > :first-child a").click();
      } else if (row.parentNode.classList.contains("data-row")) {
        row.parentNode.querySelector(".action-menu > :first-child a").click();
      }
    });
  };

  onElementReady(".data-row .action-menu", () => {
    openLp();
    changeLpEvent();
  });
};

export default openLpBtn;
