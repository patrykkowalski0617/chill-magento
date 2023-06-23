const markElementsForHideElements = (module) => {
  const inputContainers = module.querySelectorAll(
    ".module__content.module__form .module__element.module__element_half"
  );
  const markInputs = (input) => {
    input.classList.add("input-to-hide");
  };
  markInputs(inputContainers[2]);
  markInputs(inputContainers[3]);
  markInputs(inputContainers[12]);
};

export default markElementsForHideElements;
