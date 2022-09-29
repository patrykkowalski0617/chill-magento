import {
  altsAndDatesForAdditionalImages,
  inputFileFix,
  markElementsForHideElements,
  stepsFix,
} from "../variables";

const existingModuleCallback = ({ module }) => {
  altsAndDatesForAdditionalImages(module);
  inputFileFix(module);
  stepsFix(module);
  markElementsForHideElements(module);
};

export default existingModuleCallback;
