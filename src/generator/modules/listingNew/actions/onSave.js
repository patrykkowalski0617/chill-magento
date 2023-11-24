import { isLogin } from "../../../../chill";
import { updateModuleTitle } from "../../listing/variables";
import { listingId } from "../variables";

const onSave = ({ module }) => {
  updateModuleTitle(module);
  if (isLogin()) listingId(module);
};

export default onSave;
