import { isLogin } from "../../../../chill";
import { updateModuleTitle } from "../variables";
import checkTemplates from "../variables/checkTemplates";

const onSave = ({ module }) => {
  if (isLogin()) checkTemplates(module);
  updateModuleTitle(module);
};

export default onSave;
