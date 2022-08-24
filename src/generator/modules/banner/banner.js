import { moduleFix } from "../../common";
import {
  defaultFix,
  bannerOryginal,
  fromDate,
  steps,
  existingModuleCallback,
  newModuleCallback,
  onSave,
} from "./actions";

const banner = moduleFix({
  moduleClass: "module__banner",
  actions: [
    ["defaultFix", defaultFix],
    ["bannerOryginal", bannerOryginal],
    ["fromDate", fromDate],
    ["steps", steps],
  ],
  existingModuleCallback,
  newModuleCallback,
  onSave,
});

export default banner;
