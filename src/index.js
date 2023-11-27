import "./main.scss";
import "./others/showFiltresInLpSearch/showFiltresInLpSearch.scss";
import { onElementReady } from "./chill";
import {
  sortLpList,
  openLpAndEditLp,
  generatorShortcut,
  manageFilterURL,
  manageInputsCopyPaste,
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

onElementReady(".data-row .action-menu", () => {
  if (
    document.querySelector(".page-title").innerText ===
    "Zarządzaj Landig Page`ami"
  ) {
    sortLpList();
    openLpAndEditLp();
    copyTableCellContent();
  }
});

onElementReady("[name=url]", () => {
  manageFilterURL();
});
onElementReady("input, textarea", () => {
  manageInputsCopyPaste();
});

generatorShortcut();
onElementReady("[data-action=grid-filter-apply]", markExectResult);
version();

// generator/modules
onElementReady(".module__content", () => {
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
onElementReady(".btn_add-module", () => {
  addNewModule();
});

// generator/others
onElementReady("#container", scrollToTopBtn);

onElementReady(".module__bar", clickBarToCollapse);
onElementReady(".module__content", () => {
  addAdjustedModule();
  addSynopsis();
  topBar();
  stickyModuleHeaders();
  draggableModuleFix();
  pgUpPgDown();
});
onElementReady(".module textarea.input__textarea", syntaxHighlight);
onElementReady(".admin__control-textarea[name=custom_css]", mainLpCss);
onElementReady("[name=use_teaser]", teaserFix);
darkMode();
