import { renderModulTitles } from "../../../common";
import { addSynopsis } from "../../../others";
import { updateModuleTitle } from "../../html/variables";

const onSave = (module) => {
  updateModuleTitle(module, "HTML EXTENDED");
  addSynopsis();
  renderModulTitles(module);
};

export default onSave;
