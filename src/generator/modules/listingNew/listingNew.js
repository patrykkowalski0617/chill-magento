import { moduleFix } from "../../common";
import { bezpiecznik } from "../listing/actions";
import {
  defaultFix,
  existingModuleCallback,
  newModuleCallback,
} from "./actions";
import { onSave } from "../listing/actions";

const listingNew = moduleFix({
  moduleClass: "module__products_new",
  actions: [
    { btnName: "defaultFix", callback: defaultFix },
    { btnName: "bezpiecznik", callback: bezpiecznik },
  ],
  newModuleCallback,
  existingModuleCallback,
  onSave,
});

export default listingNew;
