import "./menu.scss";
import { moduleFix } from "../../../chill";
import { generateMenu } from "./variables";
import {
  defaultFix,
  existingModulesCallback,
  newModuleCallback,
} from "./actions";

const menu = moduleFix({
  moduleClass: "module__menu",
  actions: [
    ["defaultFix", defaultFix],
    ["generateMenu", generateMenu],
  ],
  newModuleCallback,
  existingModulesCallback,
});

export default menu;
