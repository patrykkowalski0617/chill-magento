import "./markInputs.scss";

const markInputs = (inputElements) => {
  inputElements.forEach((inputElement) => {
    inputElement.classList.add("chilled-element-mark");
  });
};

export default markInputs;
