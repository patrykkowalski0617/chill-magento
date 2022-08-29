import { moduleFix } from "../../common";
import { bezpiecznik } from "../listing/actions";
import {
  defaultFix,
  existingModuleCallback,
  newModuleCallback,
} from "./actions";

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
