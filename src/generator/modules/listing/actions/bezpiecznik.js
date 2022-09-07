import { markInputs } from "../../../../chill";
import { selectors } from "../variables";

const bezpiecznik = ({ module }) => {
  const dateFrom = document.querySelector('[name="date_from"]').value;
  const timeInput = module.querySelector(selectors.timeInput);
  const dateInput = module.querySelector(selectors.dateInput);

  dateInput.value = `${dateFrom.substr(6, 4)}-${dateFrom.substr(
    3,
    2
  )}-${dateFrom.substr(0, 2)}`;
  dateInput.classList.add("filled");
  timeInput.value = dateFrom.substr(11);
  timeInput.classList.add("filled");
  markInputs([timeInput, dateInput]);
};
export default bezpiecznik;
