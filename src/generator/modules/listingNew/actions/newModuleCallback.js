import { renderInputs, updateModuleTitle } from "../../listing/variables";
import { ofertaTygodnia } from "../variables";

const newModuleCallback = (module) => {
  renderInputs(module);
  updateModuleTitle(module);
  ofertaTygodnia(module);
};

export default newModuleCallback;
