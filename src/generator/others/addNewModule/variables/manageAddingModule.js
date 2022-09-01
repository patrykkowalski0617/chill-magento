import {
  listing,
  listingNew,
  filters,
  menu,
  html,
  footer,
  banner,
  bannerHero,
  htmlExtended,
  tips,
} from "../../../modules";
import { renderModuleHeaders, renderModuleTitles } from "../../../common";
import {
  addSynopsis,
  addAdjustedModule,
  clickBarToCollapse,
  draggableModuleFix,
  stickyModuleHeaders,
} from "../..";

const addingModuleHandler = () => {
  const generatorModule = document.querySelector(".module:not(.module_saved)");

  const moduleName = () => {
    const moduleFullName = Array.from(generatorModule.classList).find((value) =>
      /^module__/.test(value)
    );
    return moduleFullName;
  };
  const providedModule = document.querySelector(
    ".module:not(.chill-header-added)"
  );
  renderModuleHeaders(providedModule);
  renderModuleTitles(providedModule);
  addSynopsis();
  addAdjustedModule();
  clickBarToCollapse();
  draggableModuleFix();
  stickyModuleHeaders();
  switch (moduleName()) {
    case "module__products":
      listing(true);
      break;
    case "module__products_new":
      listingNew(true);
      break;
    case "module__filters":
      filters(true);
      break;
    case "module__menu":
      menu(true);
      break;
    case "module__html":
      html(true);
      break;
    case "module__html_extended":
      htmlExtended(true);
      break;
    case "module__footer":
      footer(true);
    case "module__banner":
      banner(true);
    case "module__banner_hero":
      bannerHero(true);
    case "module__tip":
      tips(true);
      break;
    default:
      console.log("module has no chill fixes");
  }
};

const manageAddingModule = () => {
  const addNewModuleaveBtn = document.querySelector(
    ".btn_save.module__button.module__button_save.btn_select-module"
  );

  const clickDelay = 400;
  addNewModuleaveBtn.addEventListener("click", () => {
    setTimeout(addingModuleHandler, clickDelay);
  });
};

export default manageAddingModule;
