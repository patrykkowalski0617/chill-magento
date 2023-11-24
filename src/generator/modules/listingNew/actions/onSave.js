import personal from "../../../../chill/personal";
import listingId from "../../../../chill/personal/listingId/listingId";
import { updateModuleTitle } from "../../listing/variables";

const onSave = ({ module }) => {
  updateModuleTitle(module);
  personal(() => {
    listingId(module);
  });
};

export default onSave;
