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
} from "./generator/others";

// others
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

onElementReady('[name="url"]', () => {
  manageFilterURL();
});
generatorShortcut();
onElementReady('[data-action="grid-filter-apply"]', markExectResult);
version();

// generator/modules
onElementReady(".module__content", () => {
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

  renderModuleTitles();
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
});

onElementReady(".admin__control-textarea", mainLpCss);
