import { moduleFix } from "../../common";
import { defaultFix } from "./actions";

import "./footer.scss";

const footer = moduleFix({
  moduleClass: "module__footer",
  actions: [{ btnName: "defaultFix", callback: defaultFix, n24Ready: true }],
});

export default footer;
