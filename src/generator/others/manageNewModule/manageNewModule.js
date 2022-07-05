// import listing from "../../modules/listing/listing";
// import filters from "../../modules/filters/filters";
// import menu from "../../modules/menu/menu";
// import html from "../../modules/html/html";
// import htmlExt from "../../modules/htmlExt/htmlExt";
import footer from "../../modules/footer/footer";

const manageNewModules = () => {
  const addModuleBtn = document.querySelector(".btn_add-module");
  if (addModuleBtn) {
    addModuleBtn.addEventListener("click", () => {
      setTimeout(() => {
        // expandFirstModule();
        // document
        //   .querySelector(".module_new .btn_remove")
        //   .addEventListener("click", expandFirstModule);
        document
          .querySelector(".module.module_new select")
          .addEventListener("change", () => {
            document.querySelector(".module.module_new .btn_save").click();
          });

        document
          .querySelectorAll(
            ".btn_save.module__button.module__button_save.btn_select-module, .btn.btn_rect.btn_right.btn_remove.modulte__button.module__button_remove.btn_select-module"
          )
          .forEach((btn) =>
            btn.addEventListener("click", () => {
              setTimeout(() => {
                const generatorModule = document.querySelector(
                  ".module:not(.module_saved)"
                );

                // draggableModuleFix();
                // clickBarToCollapse();
                // synopsis();
                // addAdjustedModule();
                // expandFirstModule();
                generatorModule
                  .querySelectorAll(
                    ".module__button_save, .module__button_remove"
                  )
                  .forEach((el) => {
                    el.addEventListener("click", () => {
                      //   setTimeout(synopsis, 1000);
                      //   addAdjustedModule();
                      //   expandFirstModule(1500);
                    });
                  });

                // updateSynopsisOrder(
                //   generatorModule.querySelector(".btn_drag-and-drop")
                // );

                // const moduleTypeIs = (moduleName) => {
                //   return generatorModule.classList.contains(moduleName);
                // };
                // const ifModuleNameIs = (moduleName) => {
                //   const moduleFullName = Array.from(
                //     generatorModule.classList
                //   ).find((value) => /^module__/.test(value));
                //   return moduleFullName.includes(moduleName);
                // };
                const moduleName = () => {
                  const moduleFullName = Array.from(
                    generatorModule.classList
                  ).find((value) => /^module__/.test(value));
                  return moduleFullName.replace("module__", "");
                };

                switch (moduleName()) {
                  case "footer":
                    footer(generatorModule, true);
                    break;

                  default:
                    break;
                }
              }, 400);
            })
          );
      }, 50);
    });
  }
};

export default manageNewModules;
