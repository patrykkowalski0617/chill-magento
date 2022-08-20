import "./menu.scss";
import { moduleFix } from "../../common";
import {
  defaultFix,
  existingModuleCallback,
  newModuleCallback,
  generateMenu,
  hideSubcategories,
  categoryList,
} from "./actions";

const menu = moduleFix({
  moduleClass: "module__menu",
  actions: [
    ["defaultFix", defaultFix],
    ["generateMenu", generateMenu],
    ["hideSubcategories", hideSubcategories],
    ["categoryList", categoryList],
  ],
  newModuleCallback,
  existingModuleCallback,
});

export default menu;
