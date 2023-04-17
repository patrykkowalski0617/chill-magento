const addBanerTitle = (module) => {
  const banerTitle = module.querySelector('[id^="banner_alt"]').value;
  const moduleTitleEl = module.querySelector(".module__title");
  console.log(banerTitle, moduleTitleEl);
  moduleTitleEl.innerHTML = `BANER ${banerTitle}`;
};

export default addBanerTitle;
