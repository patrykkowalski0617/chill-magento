import { moduleFix } from "../../common";
import {
  bezpiecznik,
  existingModuleCallback,
  newModuleCallback,
} from "../listing/actions";
import { defaultFix } from "./actions";

const listingNew = moduleFix({
  moduleClass: "module__products_new",
  actions: [
    ["defaultFix", defaultFix],
    ["bezpiecznik", bezpiecznik],
  ],
  newModuleCallback,
  existingModuleCallback,
});

export default listingNew;
