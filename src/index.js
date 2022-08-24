import "./main.scss";
import { onElementReady } from "./chill";
import {
  sortLpList,
  openLpAndEditLp,
  generatorShortcut,
  manageFilterURL,
  markExectResult,
} from "./others";
import { renderModuleHeader, renderModulTitles } from "./generator/common";
import {
  listing,
  listingNew,
  filters,
  menu,
  html,
  footer,
  bannerHero,
} from "./generator/modules";
import {
  navInspect,
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
  sortLpList();
  openLpAndEditLp();
});

onElementReady('[name="url"]', manageFilterURL);
generatorShortcut();
onElementReady('[data-action="grid-filter-apply"]', markExectResult);

// generator/modules
onElementReady(".module__content", () => {
  renderModuleHeader();

  listing();
  listingNew();
  filters();
  menu();
  html();
  footer();
  bannerHero();

  renderModulTitles();
});
onElementReady(".btn_add-module", () => {
  addNewModule();
});

// generator/others
onElementReady("#container", scrollToTopBtn);
draggableModuleFix();
onElementReady(".module__bar", clickBarToCollapse);
onElementReady(".module__content", () => {
  addAdjustedModule();
  addSynopsis();
  topBar();
  stickyModuleHeaders();
});

navInspect({
  elementsSelector: ".module__bar",
  animationClassName: "module__bar-in-view-port",
  animOnload: true,
});
onElementReady(".admin__control-textarea", mainLpCss);
