import { renderModuleTitles } from "../../../common";
import { addSynopsis } from "../../../others";
import { addBanerTitle } from "../variables";

const onSave = ({ module }) => {
  addBanerTitle(module);
  addSynopsis();
  renderModuleTitles(module);
};

export default onSave;
