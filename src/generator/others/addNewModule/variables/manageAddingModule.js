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
  tabs,
} from "../../../modules";
import {
  isN24 as isN24Fn,
  renderModuleHeaders,
  renderModuleTitles,
} from "../../../common";
import {
  addSynopsis,
  addAdjustedModule,
  clickBarToCollapse,
  draggableModuleFix,
  stickyModuleHeaders,
  syntaxHighlight,
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
  const isN24 = isN24Fn();

  renderModuleHeaders(providedModule);
  renderModuleTitles(providedModule);
  addSynopsis();
  addAdjustedModule();
  clickBarToCollapse();
  draggableModuleFix();
  stickyModuleHeaders();
  syntaxHighlight();

  switch (moduleName()) {
    case "module__products":
      listing({ isNewModule: true, isN24 });
      break;
    case "module__products_new":
      listingNew({ isNewModule: true, isN24 });
      break;
    case "module__filters":
      filters({ isNewModule: true, isN24 });
      break;
    case "module__menu":
      menu({ isNewModule: true, isN24 });
      break;
    case "module__html":
      html({ isNewModule: true, isN24 });
      break;
    case "module__html_extended":
      htmlExtended({ isNewModule: true, isN24 });
      break;
    case "module__footer":
      footer({ isNewModule: true, isN24 });
    case "module__banner":
      banner({ isNewModule: true, isN24 });
    case "module__banner_hero":
      bannerHero({ isNewModule: true, isN24 });
    case "module__tip":
      tips({ isNewModule: true, isN24 });
    case "module__tabs":
      tabs({ isNewModule: true, isN24 });
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
