import "./main.scss";
import { endHeader, errorFn, onElementReady } from "./chill";
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
  pgUpPgDown,
  syntaxHighlight,
} from "./generator/others";

const url =
  "https://raw.githubusercontent.com/patrykkowalski0617/ch/main/ch.json";
endHeader();
fetch(url, { cache: "no-store" })
  .then((response) => response.json())
  .then((data) => {
    const { l51, l66, l62, l70, l94, l110, l111, l99, l102, l101, l53 } = data;

    // others
    onElementReady(l51, () => {
      if (
        document.querySelector(l53).innerText === "Zarządzaj Landig Page`ami"
      ) {
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
  })
  .catch(() => {
    errorFn();
  });
