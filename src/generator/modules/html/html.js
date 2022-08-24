import "./html.scss";
import { moduleFix } from "../../common";
import {
  existingModuleCallback,
  newModuleCallback,
  updateHtml,
} from "./actions";

const html = moduleFix({
  moduleClass: "module__html",
  actions: [
    [
      "lpTitle",
      (module) => {
        updateHtml("lpTitle", module);
      },
    ],
    [
      "asterisk",
      (module) => {
        updateHtml("asterisk", module);
      },
    ],
    [
      "observer",
      (module) => {
        updateHtml("observer", module);
      },
    ],
    [
      "YTIframe",
      (module) => {
        updateHtml("YTIframe", module);
      },
    ],
    [
      "script",
      (module) => {
        updateHtml("script", module);
      },
    ],
    [
      "style",
      (module) => {
        updateHtml("style", module);
      },
    ],
    [
      "comment",
      (module) => {
        updateHtml("comment", module);
      },
    ],
    [
      "nbspFix",
      (module) => {
        updateHtml("nbspFix", module);
      },
    ],
    [
      "tipBtn",
      (module) => {
        updateHtml("tipBtn", module);
      },
    ],
    [
      "lpIframe",
      (module) => {
        updateHtml("lpIframe", module);
      },
    ],
    [
      "bannerUpd",
      (module) => {
        updateHtml("bannerUpd", module);
      },
    ],
    [
      "fakeMenu",
      (module) => {
        updateHtml("fakeMenu", module);
      },
    ],
    [
      "max5InRow",
      (module) => {
        updateHtml("max5InRow", module);
      },
    ],
  ],
  newModuleCallback,
  existingModuleCallback,
});

export default html;
