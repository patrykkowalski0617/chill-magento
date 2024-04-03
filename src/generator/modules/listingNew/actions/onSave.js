import { isLogin } from "../../../../chill";
import { checkCouponCode, updateModuleTitle } from "../../listing/variables";
import { listingId } from "../variables";

const onSave = ({ module }) => {
  updateModuleTitle(module);
  checkCouponCode(module);
  if (isLogin()) listingId(module);
};

export default onSave;
