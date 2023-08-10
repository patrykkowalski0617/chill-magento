import { moduleFix } from "../../common";
import {
  defaultFix,
  bezpiecznik,
  existingModuleCallback,
  newModuleCallback,
  hideElements,
  onSave,
} from "./actions";
// import getFromStoreEndOfListing from "./actions/getFromStoreEndOfListing";

const listing = moduleFix({
  moduleClass: "module__products",
  actions: [
    { btnName: "defaultFix", callback: defaultFix },
    { btnName: "bezpiecznik", callback: bezpiecznik },
    { btnName: "hideElements", callback: hideElements },
    // { btnName: "onlyFromShop", callback: getFromStoreEndOfListing },
  ],
  newModuleCallback,
  existingModuleCallback,
  onSave,
});

export default listing;
