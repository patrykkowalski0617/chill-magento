import "./listing.scss";
import runScriptForElement from "../../common/runScriptForElement";

const listing = () => {
  runScriptForElement("body", () => {
    console.log("success");
  });
};

export default listing;
