import {
  altsAndDatesForAdditionalImages,
  inputFileFix,
  markElementsForHideElements,
  stepsFix,
  bgVariant,
} from "../variables";

const existingModuleCallback = ({ module }) => {
  altsAndDatesForAdditionalImages(module);
  inputFileFix(module);
  stepsFix(module);
  markElementsForHideElements(module);
  bgVariant(module);
};

export default existingModuleCallback;
