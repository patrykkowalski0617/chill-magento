import { markInputs } from "../../../../chill";
import "./altsAndDatesForAdditionalImages.scss";
import inputFileFix from "./inputFileFix";

const altsAndDatesForAdditionalImages = (module) => {
  const addImgBtn = module.querySelector(".btn.btn_add-menu.js-add-image");
  addImgBtn.addEventListener(
    "click",
    () => {
      setTimeout(() => {
        let altsInput = module.querySelectorAll(
          ".input__text.input__image.input_required"
        );
        altsInput = altsInput[altsInput.length - 1];
        let dateInput = module.querySelectorAll(
          '[type="datetime-local"][name^="parameters[additional_images]"]'
        );
        dateInput = dateInput[dateInput.length - 1];
        altsInput.value = "alt";
        const date = new Date();
        const dateObj = {
          day: String(date.getDate()).padStart(2, 0),
          month: String(date.getMonth() + 1).padStart(2, 0),
          year: date.getFullYear(),
          minutes: String(date.getMinutes()).padStart(2, 0),
          houres: String(date.getHours()).padStart(2, 0),
        };
        dateInput.value = `${dateObj.year}-${dateObj.month}-${dateObj.day}T00:00`;
        dateInput = markInputs([altsInput, dateInput]);

        inputFileFix(module);
      });
    },
    500
  );
};

export default altsAndDatesForAdditionalImages;
