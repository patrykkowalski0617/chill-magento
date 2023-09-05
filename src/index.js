import "./main.scss";
import { onElementReady } from "./chill";
import {
  sortLpList,
  openLpAndEditLp,
  generatorShortcut,
  manageFilterURL,
  markExectResult,
  copyTableCellContent,
  version,
} from "./others";
import {
  isN24 as isN24Fn,
  renderModuleHeaders,
  renderModuleTitles,
} from "./generator/common";
import {
  listing,
  listingNew,
  filters,
  menu,
  html,
  footer,
  bannerHero,
  banner,
  htmlExtended,
  tips,
  tabs,
} from "./generator/modules";
import {
  scrollToTopBtn,
  draggableModuleFix,
  clickBarToCollapse,
  addAdjustedModule,
  addSynopsis,
  addNewModule,
  topBar,
  stickyModuleHeaders,
  mainLpCss,
  pgUpPgDown,
  syntaxHighlight,
  teaserFix,
  darkMode,
} from "./generator/others";

const l51 = ".data-row .action-menu";
const l66 = "[data-action=grid-filter-apply]";
const l62 = "[name=url]";
const l70 = ".module__content";
const l94 = ".btn_add-module";
const l110 = ".module textarea.input__textarea";
const l111 = ".admin__control-textarea[name=custom_css]";
const l99 = "#container";
const l102 = ".module__content";
const l101 = ".module__bar";
const l53 = ".page-title";
const l104 = "[name=use_teaser]";

onElementReady(l51, () => {
  if (document.querySelector(l53).innerText === "Zarządzaj Landig Page`ami") {
    sortLpList();
    openLpAndEditLp();
    copyTableCellContent();
  }
});

onElementReady(l62, () => {
  manageFilterURL();
});
generatorShortcut();
onElementReady(l66, markExectResult);
version();

// generator/modules
onElementReady(l70, () => {
  setTimeout(
    () => {
      renderModuleHeaders();

      const isN24 = isN24Fn();

      listing({ isN24 });
      listingNew({ isN24 });
      filters({ isN24 });
      menu({ isN24 });
      html({ isN24 });
      footer({ isN24 });
      bannerHero({ isN24 });
      banner({ isN24 });
      htmlExtended({ isN24 });
      tips({ isN24 });
      tabs({ isN24 });

      renderModuleTitles();
    },
    // settimeout becouce in isN24 element .admin__control-select is undefined from time to time
    100
  );
});
onElementReady(l94, () => {
  addNewModule();
});

// generator/others
onElementReady(l99, scrollToTopBtn);

onElementReady(l101, clickBarToCollapse);
onElementReady(l102, () => {
  addAdjustedModule();
  addSynopsis();
  topBar();
  stickyModuleHeaders();
  draggableModuleFix();
  pgUpPgDown();
});
onElementReady(l110, syntaxHighlight);
onElementReady(l111, mainLpCss);
onElementReady(l104, teaserFix);
darkMode();
