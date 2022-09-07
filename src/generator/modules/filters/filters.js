import "./filters.scss";
import { moduleFix } from "../../common";
import { defaultFixInvisible, generateFilters } from "./actions";

const filters = moduleFix({
  moduleClass: "module__filters",
  actions: [
    { btnName: "defaultFixInvisible", callback: defaultFixInvisible },
    { btnName: "generateFilters", callback: generateFilters },
  ],
});

export default filters;
