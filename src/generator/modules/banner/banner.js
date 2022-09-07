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
    { btnName: "defaultFix", callback: defaultFix },
    { btnName: "bannerOryginal", callback: bannerOryginal },
    { btnName: "fromDate", callback: fromDate },
    { btnName: "steps", callback: steps },
  ],
  existingModuleCallback,
  newModuleCallback,
  onSave,
});

export default banner;
