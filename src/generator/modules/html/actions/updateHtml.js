import { htmlSnippets } from "../variables";

const updateContent = (htmlSnippet, module, begin = false) => {
  const input = module.querySelector(".input__textarea");
  if (!input.value.includes(htmlSnippet)) {
    if (!begin) {
      input.value += htmlSnippet;
    } else {
      input.value = htmlSnippet + input.value;
    }
  } else {
    input.value = input.value.replace(htmlSnippet, "");
  }
};

const updateHtml = (action, module) => {
  switch (action) {
    case "bannerUpd":
      updateContent(htmlSnippets.banner, module);
      break;
    case "runClock24Before":
      updateContent(htmlSnippets.runClock24Before, module);
      break;
    case "nbspFix":
      updateContent(htmlSnippets.nbspFix, module);
      break;
    case "script":
      updateContent(htmlSnippets.script, module);
      break;
    case "style":
      updateContent(htmlSnippets.style, module);
      break;
    case "fakeMenu":
      updateContent(htmlSnippets.fakeMenu, module);
      break;
    case "YTIframe":
      updateContent(htmlSnippets.YT, module);
      break;
    case "lpTitle":
      updateContent(htmlSnippets.lpTitle, module);
      break;
    case "asterisk":
      updateContent(htmlSnippets.lpAsterisk, module);
      break;
    case "comment":
      updateContent(htmlSnippets.comment, module, true);
      break;
    case "tipBtn":
      updateContent(htmlSnippets.tipBtn, module);
      break;
    case "max5InRow":
      updateContent(htmlSnippets.maxFiveInRow, module);
      break;
    case "observer":
      updateContent(htmlSnippets.observer, module);
      break;
    case "lpIframe":
      updateContent(htmlSnippets.lpIframe, module);
      break;

    default:
      break;
  }
};

export default updateHtml;
