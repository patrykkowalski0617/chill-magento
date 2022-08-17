import "../listing/listing.scss";
import { moduleFix } from "../../../chill";
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
