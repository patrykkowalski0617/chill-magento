import { updateModuleTitle } from "../../html/variables";
import checkCouponCode from "../variables/checkCouponCode";

const onSave = ({ module }) => {
  updateModuleTitle(module);
  checkCouponCode(module);
};

export default onSave;
