import "./bannerHero.scss";
import { moduleFix } from "../../common";
import { defaultFix } from "./actions";

const bannerHero = moduleFix({
  moduleClass: "module__banner_hero",
  actions: [["defaultFix", defaultFix]],
});

export default bannerHero;
