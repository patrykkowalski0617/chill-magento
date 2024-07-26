import { getModuleElements } from "./";
import { onElementReady } from "../../../../chill";

const assigningProducts = (module) => {
  let containerPosition = "left";
  const { findProductsBtn } = getModuleElements(module);
  module
    .querySelector(".module__menu .btn__wrapper .module__button_find")
    .insertAdjacentHTML(
      "afterend",
      `
        <button id="categories-btn" class="chill-btn">
            <i class="btn__icon material-icons"></i>
            Lista kategorii 
        </button>
      `
    );
  // Missing products actions
  module.querySelector("#categories-btn").addEventListener("click", (e) => {
    e.preventDefault();
    findProductsBtn.click();

    const missingProductActions = () => {
      const productsContainer = document.querySelector(
        ".missing-product__dialog-box.ui-dialog-content"
      );
      // second selector is for magento update
      const productsWidget = document.querySelector(
        `.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-draggable.ui-resizable, 
        .ui-dialog.dialog-box.ui-widget.ui-widget-content.ui-front.ui-draggable.ui-resizable`
      );

      const widgetPosition = () => {
        productsWidget.id = "products-container-fix-position";
        const fixedProductsContainer = document.querySelector(
          "#products-container-fix-position"
        );
        productsWidget.insertAdjacentHTML(
          "beforeend",
          "<button class='position-btn chill-btn'> > </button>"
        );
        if (containerPosition === "right") {
          fixedProductsContainer.classList.add("right");
        }
        document
          .querySelector(".position-btn")
          .addEventListener("click", () => {
            if (fixedProductsContainer.classList.contains("right")) {
              fixedProductsContainer.classList.remove("right");
              containerPosition = "left";
            } else {
              fixedProductsContainer.classList.add("right");
              containerPosition = "right";
            }
          });
      };
      widgetPosition();

      const replaceList = () => {
        const products = Array.from(
          document.querySelectorAll(".missing-product__category")
        );

        const productsAsString = products.map((el) => el.innerHTML.trim());

        productsContainer.innerHTML = "";

        const categoriesListArr = Array.from(new Set(productsAsString));
        const counts = {};
        productsAsString.forEach((x) => {
          counts[x] = (counts[x] || 0) + 1;
        });
        window.categoriesList = categoriesListArr.map((el) => {
          const name = el.replace("kategoria: ", "");
          return {
            name,
            quantity: counts[el],
            code: name.substring(0, name.indexOf(" -")),
          };
        });

        document.querySelector(
          "#products-container-fix-position .ui-dialog-title"
        ).innerHTML = `Kategorie nie przypisane: ${window.categoriesList.length} (ilość produktów w kat.)`;
        window.categoriesList.forEach((el) => {
          productsContainer.insertAdjacentHTML(
            "beforeend",
            `<div class="missing-category"><span>${el.name} <strong>(${el.quantity})</strong></span><button>COPY</button></div>`
          );
        });
      };
      replaceList();

      const copyCategoryBtnActions = () => {
        document.querySelectorAll(".missing-category").forEach((el) => {
          el.querySelector("button").addEventListener("click", (e) => {
            const btn = e.target;
            const txt = btn.parentNode.innerText;
            const categoryNum = txt.substring(0, txt.indexOf(" -"));
            navigator.clipboard.writeText(categoryNum);
            btn.classList.add("copied");

            if (filtersIdData.length) {
              const filtersModule = document.querySelector(
                `[data-module-id="${filtersIdData[0].filtersId}"]`
              );

              const filterContainer =
                filtersModule.querySelector(".js-filter-wrapper");
              const actualFilters = filterContainer.querySelectorAll(
                ".filter__header.cf input "
              );

              const filtersToAdd = filters.filter((value) => {
                return (
                  value[1].substr(0, value[1].indexOf(" ")) === categoryNum &&
                  !Array.from(actualFilters).filter((el) =>
                    el.name.includes(value[0])
                  )[0]
                );
              });

              if (filtersToAdd.length) {
                if (!filtersModule.querySelector(".disable-content_cover")) {
                  filterContainer.insertAdjacentHTML(
                    "afterbegin",
                    "<div class='disable-content_cover'></div>"
                  );
                }
                const lastId = Number(
                  filterContainer.querySelectorAll(".filter.cf")[
                    filterContainer.querySelectorAll(".filter.cf").length - 1
                  ].dataset.filterId
                );
                filterContainer.insertAdjacentHTML(
                  "beforeend",
                  filtersToAdd
                    .map((value, i) =>
                      fliterTemplate(value[0], value[1], lastId + 1 + i)
                    )
                    .reduce((total, item) => total + item)
                );
                filtersModule.querySelector(".module__button_save").click();
              }
            }
          });
        });
      };
      copyCategoryBtnActions();
    };
    onElementReady(
      ".missing-product__dialog-box.ui-dialog-content",
      missingProductActions
    );
  });
  document
    .querySelector(
      ".btn.btn_rect.btn_center.btn_find.module__button.module__button_find"
    )
    .addEventListener("click", () => {
      // magento update
      const closeBtn = document.querySelector(
        `.ui-dialog-titlebar-close.ui-corner-all, 
        .ui-button.ui-corner-all.ui-widget.ui-button-icon-only.ui-dialog-titlebar-close
        `
      );
      if (closeBtn) {
        closeBtn.click();
      }
      const intervalId = setInterval(() => {
        const productsContainer = document.querySelector(
          ".missing-product__dialog-box.ui-dialog-content"
        );
        if (productsContainer) {
          // fix close button
          document
            .querySelector(".ui-dialog-titlebar-close.ui-corner-all")
            .addEventListener("click", (e) => {
              setTimeout(() => {
                document
                  .querySelector(
                    ".ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-draggable.ui-resizable"
                  )
                  .remove();
              }, 50);
            });
          clearInterval(intervalId);
        }
      }, 50);
    });
};
export default assigningProducts;
