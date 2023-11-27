import { pasteContent, copyContent } from "../../chill";
import "./manageInputsCopyPaste.scss";

const manageInputsCopyPaste = () => {
  setTimeout(() => {
    const inputs = Array.from(document.querySelectorAll("input, textarea"));
    const copyFn = (input) => {
      input.addEventListener("click", (e) => {
        if (e.altKey) {
          copyContent(e.target);
        }
      });
      input.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        copyContent(e.target);
      });
      input.addEventListener("dblclick", (e) => {
        pasteContent(e.target);
      });
    };

    inputs.forEach((input) => {
      copyFn(input);
    });
  }, 2000);
};
export default manageInputsCopyPaste;
