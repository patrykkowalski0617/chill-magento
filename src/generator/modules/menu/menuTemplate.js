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
