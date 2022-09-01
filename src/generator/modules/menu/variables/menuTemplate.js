const templateNowyTestFl_subCat = (categoryId, subcategoryId) => `
<div class="menu__row">
<label class="module__label">Szablon</label>
<div style="position: relative">
  <select
    class="template-options input__subcategory input__select module__select"
    data-input-name="template"
    name="parameters[menu][${categoryId}][submenu][${subcategoryId}][template]"
    value="1"
  >
    <option value="1">nowy-test-fl</option>
  </select>
</div>
<label class="module__label">Maksymalna liczba produktów</label
><input
  class="input__text input__subcategory"
  data-input-name="maxProducts"
  type="number"
  min="0"
  name="parameters[menu][${categoryId}][submenu][${subcategoryId}][max_products]"
  value="7"
/>
</div>
`;
const templateNowyTestFl_cat = (categoryId) => `
<div class="menu__row">
  <label class="module__label">Szablon</label>
  <div style="position: relative">
    <select
      class="template-options input__category module__select input__select"
      data-input-name="template"
      name="parameters[menu][${categoryId}][template]"
    >
      <option value="-1">- brak -</option>
      <option value="1" selected="">nowy-test-fl</option>
      <option value="2">odkurzacz</option>
      <option value="3">Przykładowy kafel z obrazkiem</option>
      <option value="4">Przykładowy kafel</option>
      <option value="5">lodowki</option>
      <option value="6">ekspresy</option>
      <option value="7">Szablon z obrazkiem (zmienna) PK</option></select
    ><i
      class="input__icon input__icon_select material-icons"
      style="top: 10px; right: 15px"
      ></i
    >
  </div>
  <label class="module__label">Maksymalna liczba produktów</label
  ><input
    class="input__text input__category"
    type="number"
    min="0"
    name="parameters[menu][${categoryId}][max_products]"
    data-input-name="maxProducts"
    value="7"
  />
</div>

`;
const menuTemplate = {
  emptyCategory: `
      <div class="module__category module__element_one-third js-module">
        <div class="menu cf" data-cat-id="0">
          <div class="menu__header cf">
            <div class="menu__row">
              <input
                id="menu-0_0"
                class="input__text input__category input_required"
                type="text"
                name="parameters[menu][0][name]"
                value="empty"
              />
            </div>
            <select
              id="products_"
              class="module__select input__select module__select_select-module"
              name="parameters[menu][0][icon]"
            >
              <option value="ikona_akcesoria_it.svg?#ef9f00" selected=""></option>
            </select>
          </div>
          <div class="menu__content js-category-content hidden"></div>
        </div>
      </div>
    `,
  category: (moduleId, categoryId, categoryName, icon, subcategories) => `
      <div class="module__category module__element_one-third js-module">
        <div class="menu cf" data-cat-id="${categoryId}">
          <div class="menu__header cf">
            <div class="menu__row">
              <input
                id="menu-0_${moduleId}"
                class="input__text input__category input_required"
                type="text"
                name="parameters[menu][${categoryId}][name]"
                value="${categoryName}"
              />
            </div>
            
            <select
              id="products_"
              class="module__select input__select module__select_select-module"
              name="parameters[menu][${categoryId}][id]"
              value="${icon}"
            >
            <option value="${icon}"></option>
            </select>
          </div>
          <div class="menu__content js-category-content hidden">${subcategories}</div>
        </div>
      </div>
    `,
  subcategory: (
    moduleId,
    categoryId,
    subcategoryId,
    subcategoryName,
    codes,
    direct
  ) =>
    !direct
      ? `    
      <input
        class="input__checkbox js-toggle-subcategory"
        id="menu_${categoryId}_subcategory_${subcategoryId}_switch_${moduleId}"
        type="checkbox"
        name="parameters[menu][${categoryId}][has_submenu]"
        value="1"
        checked=""
      />
      <div class="menu__row cf js-components-subcat visible">
        <div class="js-subcategories">
          <div
            class="menu__row menu__subcategory cf js-subcategory"
            data-subcat-id="${subcategoryId}"
          >
            <input
              id="menu-0-submenu-${subcategoryId}_${moduleId}"
              class="input__text input__subcategory input_required"
              type="text"
              name="parameters[menu][${categoryId}][submenu][${subcategoryId}][name]"
              value="${subcategoryName}"
            />
            ${codes}
          </div>
          ${templateNowyTestFl_subCat(categoryId, subcategoryId)}
        </div>
      </div>
    `
      : `
    <input
      class="input__checkbox js-toggle-subcategory"
      id="menu_${categoryId}_subcategory_${subcategoryId}_switch_${moduleId}"
      type="checkbox"
      name="parameters[menu][${categoryId}][has_submenu]"
      value="0"
    />
    <div class="menu__category js-components-cat visible">
      <div class="menu__row cf js-components">${codes}</div>
      ${templateNowyTestFl_cat(categoryId)}
    </div>
  `,
  code: (
    moduleId,
    categoryId,
    subcategoryId,
    codeId,
    categoryCode,
    codeName,
    direct
  ) =>
    !direct
      ? `
      <div class="menu__subcategory-components js-content-subCatComponents visible">
        <div class="menu__row cf js-components">
          <input
            class="input__hidden"
            type="hidden"
            name="parameters[menu][${categoryId}][submenu][${subcategoryId}][subcomponent][${codeId}][id]"
            value="${categoryCode}"
          />
          <input
            id="menu-${categoryId}-submenu-${subcategoryId}-comp-${codeId}_${moduleId}"
            class="input__text input__subcategory-component input_required"
            type="text"
            name="parameters[menu][${categoryId}][submenu][${subcategoryId}][subcomponent][${codeId}][name]"
            value="${codeName}"
          />
        </div>
      </div>
    `
      : `
    <div class="menu__element">
      <input
        class="input__hidden"
        type="hidden"
        name="parameters[menu][${categoryId}][subcomponent][${subcategoryId}][id]"
        value="${categoryCode}"
      /><input
        id="menu-${categoryId}-submenu-${subcategoryId}-comp-${codeId}_${moduleId}"
        class="input__text input__category-component input_required"
        type="text"
        name="parameters[menu][${categoryId}][subcomponent][${subcategoryId}][name]"
        value="${codeName}"
      />
    </div>
    `,
};

export default menuTemplate;
