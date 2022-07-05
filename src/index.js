import "./styles/main.scss";
import { runScriptForElement } from "./chill";

// others
import sortLpList from "./others/sortLpList/sortLpList";
import openLpBtn from "./others/openLpBtn/openLpBtn";
import generatorShortcut from "./others/generatorShortcut/generatorShortcut";

// generator/others
// import navInspect from "./generator/others/navInspect/navInspect";

// generator/modules
import listing from "./generator/modules/listing/listing";
import filters from "./generator/modules/filters/filters";
import menu from "./generator/modules/menu/menu";
import html from "./generator/modules/html/html";
import htmlExt from "./generator/modules/htmlExt/htmlExt";
import footer from "./generator/modules/footer/footer";
import addNewModule from "./generator/others/addNewModule/addNewModule";

// others
runScriptForElement(".data-row .action-menu", () => {
  sortLpList();
  openLpBtn();
});
generatorShortcut();

// generator/others
// runScriptForElement("", () => {
//   navInspect({
//     elementsSelector: ".module__bar",
//     animationClassName: "module__bar-in-view-port",
//     animOnload: true,
//   });
// });

// generator/modules
runScriptForElement(".module__content", () => {
  listing();
  filters();
  menu();
  html();
  htmlExt();
  footer();
});
runScriptForElement(".btn_add-module", () => {
  addNewModule();
});
