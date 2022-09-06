import { renderInputs, updateModuleTitle } from "../../listing/variables";
import { ofertaTygodnia } from "../variables";

const newModuleCallback = (module) => {
  renderInputs(module);
  updateModuleTitle(module, true);
  ofertaTygodnia(module);
};

export default newModuleCallback;
