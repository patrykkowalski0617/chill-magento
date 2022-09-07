// UWAGA!! WAŻNE!!!!
// value == 2 jest przypisane na magento do Neo24, jesli sie kiedys zmieni kolejnosc trzeba bedzie te case'y popodmieniac bo sie calosc wyjebie

const isNeo24 = () => {
  const shopSelect = document.querySelector(".admin__control-select");

  switch (shopSelect.value) {
    case "1":
      console.log("isNeo24: wybrany sklep to Neonet");
      return false;
    case "2":
      return true;
    default:
      console.log("isNeo24: nie rozpoznano jaki to sklep");
      return false;
  }
};

export default isNeo24;
