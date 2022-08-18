import "./addAdjustedModule.scss";

const addAdjustedModule = () => {
  const modules = document.querySelectorAll("#lpModules .module");
  const customBtns = document.querySelectorAll(".block_buttons-custom");
  if (customBtns) {
    customBtns.forEach((btn) => btn.remove());
  }
  const customBtn = `<div class="block block_buttons block_buttons-custom">
            <a href="" class="btn btn_center add-adjusted-module-btn" title="Dodaj moduł">
                <i class="btn__icon material-icons"></i>
            </a>
        </div>`;
  modules.forEach((el, i) => {
    if (i < modules.length) {
      const isLastChild = i === modules.length - 1;

      el.insertAdjacentHTML("afterbegin", customBtn);
      const btn = el.querySelector(".add-adjusted-module-btn");
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".btn_add-module").click();
        setTimeout(() => {
          const newModule = document.querySelector(".module_new");
          newModule.remove();
          el.insertAdjacentElement("beforebegin", newModule);
          e.target.parentElement.remove();

          document
            .querySelectorAll(
              ".btn.btn_rect.btn_left.btn_save.module__button.module__button_save.btn_select-module"
            )
            .forEach((_el) =>
              _el.addEventListener("click", () => {
                el.insertAdjacentHTML("afterbegin", customBtn);
                if (isLastChild) {
                  el.insertAdjacentHTML("beforeend", customBtn);
                }
                setTimeout(() => {
                  document
                    .querySelectorAll(".module__position")
                    .forEach((el, i) => {
                      el.value = i + 1;
                    });
                  document
                    .querySelectorAll(".module__button_save")
                    .forEach((btn) => {
                      btn.click();
                    });
                }, 1000);
              })
            );
        }, 500);
      });
    }
  });
  document
    .querySelector("#lpGenerator")
    .insertAdjacentHTML("beforeend", customBtn);
  document
    .querySelector(
      "#lpGenerator > .block_buttons-custom .add-adjusted-module-btn"
    )
    .addEventListener("click", (e) => {
      e.preventDefault();
      setTimeout(() => {
        document.querySelector(".module_new").scrollIntoView();
      }, 500);
      document.querySelector(".btn_add-module").click();
    });
};
export default addAdjustedModule;
