import { moduleFix } from "../../common";
import "./terms.scss";

const defaultFix = () => {
  navigator.clipboard.writeText(
    document.querySelector("#terms-additional").innerHTML
  );
  const btn = document.querySelector(".termsAdditional");
  btn.classList.remove("clicked");
  btn.classList.add("clicked");
  const id = setTimeout(() => {
    btn.classList.remove("clicked");
  }, 1000);
};

const terms = moduleFix({
  moduleClass: "module__terms_and_condition",
  actions: [{ btnName: "termsAdditional", callback: defaultFix }],
});

export default terms;
