import "./menu.scss";
import { moduleFix } from "../../../chill";
import {
  defaultFix,
  existingModuleCallback,
  newModuleCallback,
  generateMenu,
} from "./actions";

const menu = moduleFix({
  moduleClass: "module__menu",
  actions: [
    ["defaultFix", defaultFix],
    ["generateMenu", generateMenu],
  ],
  newModuleCallback,
  existingModuleCallback,
});

export default menu;
