import "./filters.scss";
import { moduleFix } from "../../common";
import { defaultFixInvisible, generateFilters } from "./actions";

const filters = moduleFix({
  moduleClass: "module__filters",
  actions: [
    ["defaultFixInvisible", defaultFixInvisible],
    ["generateFilters", generateFilters],
  ],
});

export default filters;
