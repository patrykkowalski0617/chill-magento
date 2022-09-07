import {
  altsAndDatesForAdditionalImages,
  inputFileFix,
  stepsFix,
} from "../variables";

const existingModuleCallback = ({ module }) => {
  altsAndDatesForAdditionalImages(module);
  inputFileFix(module);
  stepsFix(module);
};

export default existingModuleCallback;
