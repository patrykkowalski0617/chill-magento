import "./draggableModuleFix.scss";
const draggableModuleFix = () => {
  document
    .querySelectorAll("#lpGenerator .module__bar .btn_drag-and-drop")
    .forEach((el) => el.addEventListener("click", (e) => e.preventDefault()));
};
export default draggableModuleFix;
