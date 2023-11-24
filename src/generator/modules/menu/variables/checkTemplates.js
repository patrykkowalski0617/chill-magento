import "./checkTemplates.scss";

const checkTemplates = (module) => {
  const templatesSelects = module.querySelectorAll(
    `.template-options.input__subcategory.input__select.module__select,
     .visible .template-options.input__category.module__select.input__select`
  );

  templatesSelects.forEach((templatesSelect) => {
    templatesSelect.classList.remove("chill-mark-wrong-template");
    if (templatesSelect.value !== "1") {
      templatesSelect.classList.add("chill-mark-wrong-template");
      alert("Nie wszystkie szablony są ustawione na 'nowy-test-fl'!");
    }
  });
};

export default checkTemplates;
