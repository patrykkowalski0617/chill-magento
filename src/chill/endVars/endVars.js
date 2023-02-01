import "./endVars.scss";
import errorFn from "../errorFn/errorFn";
import endHeader from "../endHeader/endHeader";

const endVars = (callback) => {
  const url =
    "https://raw.githubusercontent.com/patrykkowalski0617/ch/main/ch.json";
  endHeader();
  fetch(url, { cache: "no-store" })
    .then((response) => response.json())
    .then((data) => {
      callback(data);
      document.body.classList.add("end-vars");
    })
    .catch(() => {
      errorFn();
      document.body.classList.add("end-vars");
    });
};

export default endVars;
