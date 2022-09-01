import { renderInputs, updateModuleTitle } from "../../listing/variables";
import { ofertaTygodnia } from "../variables";

const existingModuleCallback = (module) => {
  renderInputs(module);
  updateModuleTitle(module);
  ofertaTygodnia(module);
};

export default existingModuleCallback;
