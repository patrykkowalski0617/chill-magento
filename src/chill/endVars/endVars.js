import errorFn from "../errorFn/errorFn";
import endHeader from "../endHeader/endHeader";

const endVars = (callback) => {
  const ch = (chconfirm) => {
    const url =
      "https://raw.githubusercontent.com/patrykkowalski0617/ch/main/ch.json";

    fetch(url, { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => {
        callback(data);
        document.body.classList.add("chill-ch-loaded");
      })
      .catch(() => {
        errorFn(chconfirm);
      });
  };

  fetch(
    `https://raw.githubusercontent.com/patrykkowalski0617/endHeader/main/end-header.json`,
    { cache: "no-store" }
  )
    .then((response) => response.json())
    .then(({ endheader, chconfirm }) => {
      endHeader(endheader);
      ch(chconfirm);
    })
    .catch((error) => {
      console.error("error", error);
      ch();
    });
};

export default endVars;
