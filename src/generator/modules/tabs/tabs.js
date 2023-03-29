import { moduleFix } from "../../common";
import { defaultFix } from "./actions";

const tabs = moduleFix({
  moduleClass: "module__tabs",
  actions: [{ btnName: "defaultFix", callback: defaultFix }],
});

export default tabs;
