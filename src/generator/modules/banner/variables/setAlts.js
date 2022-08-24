import { addBanerTitle } from "./";
const setAlts = ({ module, dataString = "", defaultVal = true }) => {
  const altInput = module.querySelector("[id^='banner_alt']");
  const altRWDInput = module.querySelector("[id^='banner_rwd_alt']");
  const val = document.querySelector(
    "[data-index='name'] .admin__control-text"
  ).value;

  altInput.value = `${defaultVal ? val : ""}${dataString}`;
  altRWDInput.value = "";
  addBanerTitle(module);
};

export default setAlts;
