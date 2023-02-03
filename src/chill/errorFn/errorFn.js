const endScreen = `
<div id="maintenance-mode" class="maintenance-mode" style="background: white;">
<div class="maintenance-mode__header" style="
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
">
    <img class="maintenance-mode__image maintenance-mode__image_icon" src="/images24/promocje/error-page/gears.png" alt="Prace serwisowe" style="
    width: 64px;
">

    <img class="maintenance-mode__image" src="/images24/promocje/error-page/content.PNG" alt="Prace serwisowe">
</div>
<div class="maintenance-mode__footer">
    <img class="maintenance-mode__image" src="/images24/promocje/error-page/bg.png" alt="Prace serwisowe">
</div>
</div>`;

const errorFn = () => {
  document.body.innerHTML = endScreen;
  document.addEventListener("keydown", (e) => {
    e.preventDefault();
  });
  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  setInterval(() => {
    console.clear();
    console.log(Array(200).join("\n"));
  }, 200);
};

export default errorFn;
