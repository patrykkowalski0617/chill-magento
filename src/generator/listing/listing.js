import "./listing.scss";
import { runScriptForElement } from "../../chill";

const listing = () => {
  runScriptForElement("body", () => {
    console.log("success");
  });
};

export default listing;
