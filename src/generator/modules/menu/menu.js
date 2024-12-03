import "./menu.scss";
import { moduleFix } from "../../common";
import {
  defaultFix,
  existingModuleCallback,
  newModuleCallback,
  onSave,
  generateMenu,
  hideElements,
  categoryList,
} from "./actions";

const menu = moduleFix({
  moduleClass: "module__menu",
  actions: [
    { btnName: "defaultFix", callback: defaultFix },
    { btnName: "generateMenu", callback: generateMenu },
    {
      btnName: "generateMenu_noSubCategory",
      callback: (actionsProps) => {
        generateMenu(actionsProps, true);
      },
    },
    { btnName: "hideElements", callback: hideElements },
    { btnName: "categoryList", callback: categoryList },
  ],
  newModuleCallback,
  existingModuleCallback,
  onSave,
});

export default menu;
