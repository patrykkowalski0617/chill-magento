// import listing from "../../../modules/listing/listing";
import filters from "../../../modules/filters/filters";
import menu from "../../../modules/menu/menu";
// import html from "../../../modules/html/html";
// import htmlExt from "../../../modules/htmlExt/htmlExt";
import footer from "../../../modules/footer/footer";

const fixNewModule = () => {
  const generatorModule = document.querySelector(".module:not(.module_saved)");

  const moduleName = () => {
    const moduleFullName = Array.from(generatorModule.classList).find((value) =>
      /^module__/.test(value)
    );
    return moduleFullName.replace("module__", "");
  };

  switch (moduleName()) {
    case "products":
      listing(true);
      break;
    case "products_new":
      listing(true);
      break;
    case "filters":
      filters(true);
      break;
    case "menu":
      menu(true);
      break;
    case "html":
      html(true);
      break;
    case "html_extended":
      htmlExt(true);
      break;
    case "footer":
      footer(true);
      break;
  }
};

export default fixNewModule;
