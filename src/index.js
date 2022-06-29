import "./styles/main.scss";

// others
import sortLpList from "./others/sortLpList/sortLpList";
import openLpBtn from "./others/openLpBtn/openLpBtn";
import generatorShortcut from "./others/generatorShortcut/generatorShortcut";

// generator/others
import navInspect from "./generator/others/navInspect/navInspect";

import listing from "./generator/modules/listing/listing";
import filters from "./generator/modules/filters/filters";
import menu from "./generator/modules/menu/menu";
import html from "./generator/modules/html/html";
import htmlExt from "./generator/modules/htmlExt/htmlExt";

// others
sortLpList();
openLpBtn();
generatorShortcut();

// generator/others
navInspect({
  elementsSelector: ".module__bar",
  animationClassName: "module__bar-in-view-port",
  animOnload: true,
});

// generator/modules
listing();
filters();
menu();
html();
htmlExt();
