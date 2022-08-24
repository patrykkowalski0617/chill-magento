import { renderModulTitles } from "../../../common";
import { addSynopsis } from "../../../others";
import { updateModuleTitle } from "../variables";

const onSave = (module) => {
  updateModuleTitle(module, "HTML");
  addSynopsis();
  renderModulTitles(module);
};

export default onSave;
