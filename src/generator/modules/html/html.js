import "./html.scss";
import { moduleFix } from "../../common";
import {
  existingModuleCallback,
  newModuleCallback,
  updateHtml,
  onSave,
} from "./actions";

const html = moduleFix({
  moduleClass: "module__html",
  actions: [
    [
      "moduleTitle",
      (module) => {
        updateHtml("comment", module);
      },
    ],
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
      "lpIframe",
      (module) => {
        updateHtml("lpIframe", module);
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
  onSave,
});

export default html;
