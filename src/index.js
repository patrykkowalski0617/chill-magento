import "./chill/main.scss";
import { onElementReady } from "./chill";

// others
import sortLpList from "./others/sortLpList/sortLpList";
import openLpBtn from "./others/openLpBtn/openLpBtn";
import generatorShortcut from "./others/generatorShortcut/generatorShortcut";
import changeLpEvent from "./others/changeLpEvent/changeLpEvent";
import manageFilterURL from "./others/manageFilterURL/manageFilterURL";
import markExectResult from "./others/markExectResult/markExectResult";

// generator/modules
import listing from "./generator/modules/listing/listing";
import listingNew from "./generator/modules/listingNew/listingNew";
import filters from "./generator/modules/filters/filters";
import menu from "./generator/modules/menu/menu";
import html from "./generator/modules/html/html";
import footer from "./generator/modules/footer/footer";
import bannerHero from "./generator/modules/bannerHero/bannerHero";

// generator/others
import navInspect from "./generator/others/navInspect/navInspect";
import scrollToTopBtn from "./generator/others/scrollToTopBtn/scrollToTopBtn";
import draggableModuleFix from "./generator/others/draggableModuleFix/draggableModuleFix";
import clickBarToCollapse from "./generator/others/clickBarToCollapse/clickBarToCollapse";
import addAdjustedModule from "./generator/others/addAdjustedModule/addAdjustedModule";
import addSynopsis from "./generator/others/addSynopsis/addSynopsis";
import addNewModule from "./generator/others/addNewModule/addNewModule";

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
});

navInspect({
  elementsSelector: ".module__bar",
  animationClassName: "module__bar-in-view-port",
  animOnload: true,
});
