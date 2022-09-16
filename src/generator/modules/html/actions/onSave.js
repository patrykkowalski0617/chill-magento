import { renderModuleTitles } from "../../../common";
import { addSynopsis } from "../../../others";
import { updateModuleTitle } from "../variables";

const onSave = ({ module }) => {
  updateModuleTitle(module, "HTML");
  addSynopsis();
  renderModuleTitles(module);
};

export default onSave;
