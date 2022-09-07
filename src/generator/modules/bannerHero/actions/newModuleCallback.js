import {
  altsAndDatesForAdditionalImages,
  inputFileFix,
  stepsFix,
} from "../variables";

const newModuleCallback = ({ module }) => {
  altsAndDatesForAdditionalImages(module);
  inputFileFix(module);
  stepsFix(module);
};

export default newModuleCallback;
