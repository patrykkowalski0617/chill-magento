const defaultFix = (module) => {
  const tytulPrzyciskuTimera = module.querySelector(
    '[id^="banner_hero_timer_button_text"]'
  );
  const tytulNadTimerem = module.querySelector(
    '[id^="banner_hero_timer_title"]'
  );
  const dataZakonczenia = module.querySelector('[id^="banner_hero_end_date"]');
  const dataRozpoczecia = module.querySelector(
    '[id^="banner_hero_start_date"]'
  );

  const tytulPrzyciskuTimeraVal = "Jak skorzystać z promocji?";
  const tytulNadTimeremVal = "Do zakończenia zostało:";
  let dataZakonczeniaVal = document.querySelector("[name=date_to]").value;
  dataZakonczeniaVal =
    dataZakonczeniaVal.substr(6, 4) +
    "-" +
    dataZakonczeniaVal.substr(3, 2) +
    "-" +
    dataZakonczeniaVal.substr(0, 2) +
    "T" +
    dataZakonczeniaVal.substr(11);
  const dataRozpoczeciaDate = new Date(dataZakonczeniaVal);
  const dataRozpoczeciaTime = dataRozpoczeciaDate.getTime();
  const dataRozpoczeciaTimeMinus24H = dataRozpoczeciaTime - 86400000 - 3600001;
  const dataRozpoczeciaVal = new Date(dataRozpoczeciaTimeMinus24H);

  const getDateObj = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours() + 1).padStart(2, "0");
    const minutes = String(date.getMinutes() + 1).padStart(2, "0");
    const seconds = String(date.getSeconds() + 1).padStart(2, "0");
    return {
      day,
      month,
      year,
      hours: hours >= 24 ? 23 : hours,
      minutes: minutes >= 60 ? 59 : minutes,
      seconds: seconds >= 60 ? 59 : seconds,
    };
  };

  const { day, month, year, hours, minutes } = getDateObj(dataRozpoczeciaVal);

  const allEl = [
    { el: tytulPrzyciskuTimera, elVal: tytulPrzyciskuTimeraVal },
    { el: tytulNadTimerem, elVal: tytulNadTimeremVal },
    { el: dataZakonczenia, elVal: dataZakonczeniaVal },
    {
      el: dataRozpoczecia,
      elVal: `${year}-${month}-${day}T${hours}:${minutes}`,
    },
  ];

  allEl.forEach(({ el, elVal }) => {
    el.value = elVal;
    el.classList.add("filled");
  });
};

export default defaultFix;
