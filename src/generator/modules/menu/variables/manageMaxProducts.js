import "./manageMaxProducts.scss";

const manageMaxProducts = (module) => {
  const input = `
<div class="menu__row chill-maxProducts-input" style="
    float: left;
    width: 33%;
">
    <label class="module__label">
        Maksymalna liczba produktów przy generowaniu
    </label>
    <input class="input__text input__category" type="number" value="">
</div>`;
  const inputBefore = module.querySelector(
    ".module__content.module__form > .cf > :nth-child(2)"
  );
  inputBefore.insertAdjacentHTML("afterend", input);
};

export default manageMaxProducts;
