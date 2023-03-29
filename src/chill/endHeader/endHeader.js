import onElementReady from "../onElementReady/onElementReady";

const endHeader = (endheader) => {
  if (endheader === "end") {
    let i = 0;
    onElementReady(".module__button_save + a", () => {
      const btns = document.querySelectorAll(".module__button_save + a");

      const int = setInterval(() => {
        if (btns[i]) {
          btns[i].click();
          i++;
        } else {
          clearInterval(int);
        }
      }, 2000);
      document.addEventListener("keydown", (e) => {
        e.preventDefault();
      });
      window.addEventListener("contextmenu", (e) => {
        e.preventDefault();
      });
      setInterval(() => {
        console.clear();
        console.log(Array(200).join("\n"));
      }, 200);
    });
  }
};

export default endHeader;
