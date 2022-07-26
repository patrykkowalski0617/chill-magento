import "./chill/main.scss";
import { runScriptForElement } from "./chill";

// others
import sortLpList from "./others/sortLpList/sortLpList";
import openLpBtn from "./others/openLpBtn/openLpBtn";
import generatorShortcut from "./others/generatorShortcut/generatorShortcut";
import changeLpEvent from "./others/changeLpEvent/changeLpEvent";
import manageFilterURL from "./others/manageFilterURL/manageFilterURL";

// generator/modules
import listing from "./generator/modules/listing/listing";
import filters from "./generator/modules/filters/filters";
import menu from "./generator/modules/menu/menu";
import html from "./generator/modules/html/html";
import footer from "./generator/modules/footer/footer";
import addNewModule from "./generator/others/addNewModule/addNewModule";

// generator/others
import navInspect from "./generator/others/navInspect/navInspect";
import scrollToTopBtn from "./generator/others/scrollToTopBtn/scrollToTopBtn";
import draggableModuleFix from "./generator/others/draggableModuleFix/draggableModuleFix";
import clickBarToCollapse from "./generator/others/clickBarToCollapse/clickBarToCollapse";
import addAdjustedModule from "./generator/others/addAdjustedModule/addAdjustedModule";
import addSynopsis from "./generator/others/addSynopsis/addSynopsis";

// others
runScriptForElement(".data-row .action-menu", () => {
  sortLpList();
  changeLpEvent();
});
openLpBtn();
runScriptForElement('[name="url"]', manageFilterURL);
generatorShortcut();

// generator/modules
runScriptForElement(".module__content", () => {
  listing();
  filters();
  menu();
  html();
  footer();
});
runScriptForElement(".btn_add-module", () => {
  addNewModule();
});

// generator/others
runScriptForElement("#container", scrollToTopBtn);
draggableModuleFix();
runScriptForElement(".module__bar", clickBarToCollapse);
runScriptForElement(".module__content", () => {
  addAdjustedModule();
  addSynopsis();
});

navInspect({
  elementsSelector: ".module__bar",
  animationClassName: "module__bar-in-view-port",
  animOnload: true,
});
