import "./chill/main.scss";
import { onElementReady } from "./chill";
import {
  sortLpList,
  openLpBtn,
  generatorShortcut,
  changeLpEvent,
  manageFilterURL,
  markExectResult,
} from "./others";
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
} from "./generator/others";

// others
onElementReady(".data-row .action-menu", () => {
  sortLpList();
  changeLpEvent();
});
openLpBtn();
onElementReady('[name="url"]', manageFilterURL);
generatorShortcut();
onElementReady('[data-action="grid-filter-apply"]', markExectResult);

// generator/modules
onElementReady(".module__content", () => {
  listing();
  listingNew();
  filters();
  menu();
  html();
  footer();
  bannerHero();
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
