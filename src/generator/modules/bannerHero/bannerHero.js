import "./bannerHero.scss";
import { moduleFix } from "../../common";
import {
  defaultFix,
  existingModuleCallback,
  newModuleCallback,
} from "./actions";

const bannerHero = moduleFix({
  moduleClass: "module__banner_hero",
  actions: [["defaultFix", defaultFix]],
  existingModuleCallback,
  newModuleCallback,
});

export default bannerHero;
