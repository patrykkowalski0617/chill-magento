import "./version.scss";

const version = () => {
  const logo = document.querySelector(".logo");
  fetch(chrome.runtime.getURL("/manifest.json"))
    .then((res) => res.json())
    .then((res) => {
      logo.insertAdjacentHTML(
        "beforeend",
        `<p class="chill-version">v${res.version}</p>`
      );
    })
    .catch((err) => {
      console.log("res", err);
    });
};
export default version;
