// Add action buttons in module. Function returns buttons
const addChillActions = (
  generatorModule,
  actions,
  directSelector = ".module__content"
) => {
  generatorModule.querySelector(directSelector).insertAdjacentHTML(
    "afterbegin",
    `<div class="chill-actions">
             ${
               actions
                 ? actions
                     .map(
                       (action) =>
                         `<button class='chill-btn'>${action}</button>`
                     )
                     .join("")
                 : ""
             }
            </div>`
  );
  return generatorModule.querySelectorAll(".chill-btn");
};

export default addChillActions;
