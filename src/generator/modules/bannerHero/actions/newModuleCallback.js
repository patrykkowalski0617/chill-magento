import {
  altsAndDatesForAdditionalImages,
  inputFileFix,
  markElementsForHideElements,
  stepsFix,
} from "../variables";

const newModuleCallback = ({ module }) => {
  altsAndDatesForAdditionalImages(module);
  inputFileFix(module);
  stepsFix(module);
  markElementsForHideElements(module);
};

export default newModuleCallback;
