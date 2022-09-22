import "./bannerHero.scss";
import { moduleFix } from "../../common";
import {
  defaultFix,
  existingModuleCallback,
  newModuleCallback,
  hideElements,
} from "./actions";

const bannerHero = moduleFix({
  moduleClass: "module__banner_hero",
  actions: [
    { btnName: "defaultFix", callback: defaultFix },
    { btnName: "hideElements", callback: hideElements },
  ],
  existingModuleCallback,
  newModuleCallback,
});

export default bannerHero;
