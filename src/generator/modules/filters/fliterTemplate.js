const fliterTemplate = (val1, val2, id) => `
<div class="module__filter module__element js-module">
  <div class="filter cf" data-filter-id="${id}">
    <div class="filter__header cf">
      <a
        href="#"
        title="Przeciągnij i upuść"
        class="btn btn_drag-and-drop js-dad-filter"
        ><i class="btn__icon material-icons"></i
      ></a>
      <div class="filter__row">
        <input
          class="input__text input__category input_required js-filter-input"
          id="filter-0_placeholder"
          name="parameters[filters][${val1}][name]"
          value="${val2}"
          placeholder="Wybierz nazwę z listy"
          type="text"
          title="${val2}"
        /><a
          href="#"
          class="btn menu__btn_remove-filter js-remove-filter"
          title="Usuń"
          ><i class="btn__icon btn__icon-x-left material-icons"></i
          ><i class="btn__icon btn__icon-x-right material-icons"></i
        ></a>
        <ul class="filter__list js-filter-list"></ul>
      </div>
    </div>
    <div class="filter__content">
      <label
        class="custom-checkbox module__display_ib"
        for="filters_${val1}_placeholder"
        ><input
          id="filters_${val1}_placeholder"
          class="input__checkbox"
          type="checkbox"
          name="parameters[filters][${val1}][value]"
          checked="" />
        <div class="custom-checkbox__slider round"></div
      ></label>
    </div>
  </div>
</div>
`;
export default fliterTemplate;
