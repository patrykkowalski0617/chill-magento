import { markInputs } from "../../../../chill";
import { selectors } from "./";

const bezpiecznikDateDefaultValue = (module) => {
  const dateInput = module.querySelector(selectors.dateInput);
  const timeInput = module.querySelector(selectors.timeInput);
  const date = new Date();
  const date5minLater = new Date(date.getTime() + 1000 * 60 * 5);
  const date5minLaterData = {
    day: String(date5minLater.getDate()).padStart(2, 0),
    month: String(date5minLater.getMonth() + 1).padStart(2, 0),
    year: date5minLater.getFullYear(),
    minutes: String(date5minLater.getMinutes()).padStart(2, 0),
    houres: String(date5minLater.getHours()).padStart(2, 0),
  };
  dateInput.value = `${date5minLaterData.year}-${date5minLaterData.month}-${date5minLaterData.day}`;
  timeInput.value = `${date5minLaterData.houres}:${date5minLaterData.minutes}`;
  markInputs([dateInput, timeInput]);
};

export default bezpiecznikDateDefaultValue;
