import { markInputs } from "../../../../chill";
import { selectors } from "./";

const textAreaDefaultText = (module) => {
  const gidInput = module.querySelector(selectors.gidInput);
  if (gidInput.value === "") {
    gidInput.value = "CHILL";
    markInputs([gidInput]);
  }
};

export default textAreaDefaultText;
