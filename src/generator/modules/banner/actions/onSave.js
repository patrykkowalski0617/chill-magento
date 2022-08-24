import { renderModulTitles } from "../../../common";
import { addSynopsis } from "../../../others";
import { addBanerTitle } from "../variables";

const onSave = (module) => {
  addBanerTitle(module);
  addSynopsis();
  renderModulTitles(module);
};

export default onSave;
