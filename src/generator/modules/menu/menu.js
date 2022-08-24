import "./menu.scss";
import { moduleFix } from "../../common";
import {
  defaultFix,
  existingModuleCallback,
  newModuleCallback,
  generateMenu,
  hideElements,
  categoryList,
} from "./actions";

const menu = moduleFix({
  moduleClass: "module__menu",
  actions: [
    ["defaultFix", defaultFix],
    ["generateMenu", generateMenu],
    ["hideElements", hideElements],
    ["categoryList", categoryList],
  ],
  newModuleCallback,
  existingModuleCallback,
});

export default menu;
