import { moduleFix } from "../../common";
import { defaultFix } from "./actions";

const tips = moduleFix({
  moduleClass: "module__tip",
  actions: [{ btnName: "defaultFix", callback: defaultFix, n24Ready: true }],
});

export default tips;
