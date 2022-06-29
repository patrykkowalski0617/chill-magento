import "./listing.scss";
import { runScriptForElement, nnColors } from "../../../chill";

const listing = () => {
  runScriptForElement("body", () => {
    console.log(nnColors);
  });
};

export default listing;
