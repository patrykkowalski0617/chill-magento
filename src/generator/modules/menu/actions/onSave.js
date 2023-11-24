import { isLogin } from "../../../../chill";
import checkTemplates from "../variables/checkTemplates";

const onSave = ({ module }) => {
  if (isLogin()) checkTemplates(module);
};

export default onSave;
