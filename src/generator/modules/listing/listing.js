import { moduleFix } from "../../common";
import {
  defaultFix,
  bezpiecznik,
  existingModuleCallback,
  newModuleCallback,
  hideElements,
} from "./actions";

const listing = moduleFix({
  moduleClass: "module__products",
  actions: [
    ["defaultFix", defaultFix],
    ["bezpiecznik", bezpiecznik],
    ["hideElements", hideElements],
  ],
  newModuleCallback,
  existingModuleCallback,
});

export default listing;
