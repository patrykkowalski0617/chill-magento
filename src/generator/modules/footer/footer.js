import { moduleFix } from "../../../chill";
import { defaultFix } from "./actions";

import "./footer.scss";

const footer = moduleFix({
  moduleClass: "module__footer",
  actions: [["defaultFix", defaultFix]],
});

export default footer;
