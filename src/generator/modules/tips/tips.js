import { moduleFix } from "../../common";
import { defaultFix } from "./actions";

const tips = moduleFix({
  moduleClass: "module__tip",
  actions: [["defaultFix", defaultFix]],
});

export default tips;
