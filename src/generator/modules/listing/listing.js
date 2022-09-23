import { moduleFix } from "../../common";
import {
  defaultFix,
  bezpiecznik,
  existingModuleCallback,
  newModuleCallback,
  hideElements,
  onSave,
} from "./actions";

const listing = moduleFix({
  moduleClass: "module__products",
  actions: [
    { btnName: "defaultFix", callback: defaultFix },
    { btnName: "bezpiecznik", callback: bezpiecznik },
    { btnName: "hideElements", callback: hideElements },
  ],
  newModuleCallback,
  existingModuleCallback,
  onSave,
});

export default listing;
