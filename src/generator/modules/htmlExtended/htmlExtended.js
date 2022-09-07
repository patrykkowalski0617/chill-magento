import { moduleFix } from "../../common";
import { existingModuleCallback, newModuleCallback, onSave } from "./actions";
import { updateHtml } from "../html/actions";

const htmlExtended = moduleFix({
  moduleClass: "module__html_extended",
  actions: [
    {
      btnName: "moduleTitle",
      callback: (module) => {
        updateHtml("comment", module);
      },
    },
  ],
  newModuleCallback,
  existingModuleCallback,
  onSave,
});

export default htmlExtended;
