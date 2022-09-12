const cssSnippets = {
  mainCss: `
/* >> mainCss start v2 >> >> >> */

/* increase letter-spacing in tabs */
body [class*="tabScss-root"] {
    letter-spacing: 0.6px;
}

/* asterisks */
.lp-asterisk {
  text-align: center;
  padding: 20px 10px;
  max-width: 760px;
  margin: auto;
}

/* titles */
.lp-title {
  font-size: 26px;
  text-align: center;
  padding: 20px 0;
}
.lp-title::after {
  display: block;
  margin: 4px auto 0;
  background-color: #ff444f;
  width: 30px;
  height: 3px;
  content: "";
}

/* center buttons in benner hero */
body [class*="heroBannerScss-banner__promotion"] {
  justify-content: center;
}
/* uppercase for menu */
.primaryItemDesktopCss-root-b1p,
.secondaryItemDesktopCss-root-p6v {
  text-transform: uppercase;
}

/* scroll padding fix */
@media (min-width: 1100px) {
  html {
    scroll-padding-top: 60px;
  }
}

/* no idea what is it */
@media (min-width: 1600px) {
  body .productAttributesCss-attribute_landing-2dT,
  body .dataSectionCss-attribute-Web {
    max-height: unset;
  }
}

/* clock -  clock in teaser and lp */
body [class*="clockDefaultScss-grid_container"] /*lp*/,
body [class*="teaserScss-root"] /*teser*/ {
  max-width: unset;
  background-image: url(https://www.neonet.pl/images24/promocje/new-teaser/v8/bg_dark.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 270px;
  max-width: 100% !important;
}

body [class*="main-page"] /*teser*/ {
  min-height: unset;
}

body [class*="clockDefaultScss-label-"] /*lp*/,
body [class*="teaserScss-label"] /*teser*/ {
  color: #fff;
  padding: 30px 5px 5px;
  font-size: 25px;
  font-weight: bold;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

body [class*="clockDefaultScss-label-"]::before  /*lp*/,
body [class*="teaserScss-label"]::before /*teser*/ {
  content: "";
  background-image: url(https://www.neonet.pl/images24/promocje/new-teaser/v8/ikona.svg);
  width: 45px;
  height: 45px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 15px 5px 0px;
}

body [class*="clockDefaultScss-list__item-"]:nth-of-type(odd) /*lp*/,
body [class*="teaserScss-list__item-"]:nth-of-type(odd) /*teser*/ {
  height: 110px;
  width: 110px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

body [class*="clockDefaultScss-list__item-"] /*lp*/,
body [class*="teaserScss-list__item-"] /*teser*/ {
  background-image: url(https://www.neonet.pl/images24/promocje/new-teaser/v8/tlo_licznik_grafit.svg);
  background-size: cover;
  position: relative;
  color: #fff;
  margin: 0px 11px;
  height: 110px;
  width: 110px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

body [class*="clockDefaultScss-list__item__count"] /*lp*/,
body [class*="teaserScss-list__item__count"] /*teser*/ {
  border: none;
  font-size: 60px;
}

body [class*="clockDefaultScss-list__item-"]::after /*lp*/,
body [class*="teaserScss-list__item-"]::after /*teser*/ {
  content: "";
  position: absolute;
  font-size: 60px;
  right: -17px;
  color: #707070;
  background-image: url(https://www.neonet.pl/images24/promocje/new-teaser/v8/dwukropek.svg);
  height: 110px;
  width: 13px;
  background-repeat: no-repeat;
  background-position: center;
}

body [class*="clockDefaultScss-list__item-"]:last-child::after /*lp*/,
body [class*="teaserScss-list"] > :last-child::after /*teser*/ {
  display: none;
}

@media (max-width: 600px) {
  body [class*="clockDefaultScss-list"], /*lp*/
  body [class*="teaserScss-list"] /*teser*/ {
    max-width: 300px;
  }

  body [class*="clockDefaultScss-list__item-"], /*lp*/
  body [class*="teaserScss-list__item-"] /*teser*/ {
    margin-bottom: 30px;
  }

  body [class*="clockDefaultScss-list__item-"]::after /*lp*/,
  body [class*="teaserScss-list__item-"]::after /*teser*/ {
    display: none;
  }

  body [class*="clockDefaultScss-list__item-"]::after /*lp*/,
  body [class*="teaserScss-label"] /*teser*/ {
    max-width: 300px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 30px;
  }
}
body [class*="clockDefaultScss-list__item__count"] /*lp*/ {
  color: #fff;
  background-color: transparent;
  height: 60px;
  width: 70px;
}

body [class*="clockDefaultScss-label-"] /*lp*/ {
  font-size: 0;
}
body [class*="clockDefaultScss-label-"]::after /*lp*/ {
  font-size: 25px;
  content: "Do zakończenia zostało:";
}
body [class*="clockDefaultScss-label-"] /*lp*/ {
  padding: 0;
}

/* hide days in clock and in clock in header */

body [class*="promotionTimerScss-content-"] > :first-child,
body [class*="clockDefaultScss-list__item-"]:first-child {
  display: none;
}
/* stretch content */
body .htmlScss-grid_container-34m, /*teser*/
body [class*="htmlExtendedScss-grid_container"] /*teser*/ {
  max-width: unset !important;
}

/* center promo regulations button */
body
  [class*="footerScss-container"]
  [class*="footerScss-buttonContainer"]:not([class*="footerScss-textcontent"]
    + [class*="footerScss-buttonContainer"]),
body
  [class*="footerScss-container"]
  [class*="footerScss-buttonContainer"]
  [class*="footerScss-button"]:not([class*="footerScss-textcontent"]
    + [class*="footerScss-buttonContainer"]
    [class*="footerScss-button"]) {
  margin: auto;
}

/* Hide numbers in side tips */
body [class*="promotionInfoScss-number"] {
  display: none;
}
/* << << << mainCss end << */
  `,
  payback: `
/* >> payback start v1 >> >> >> */
[class*="savingsScss-discount__label"] {
  font-size: 0;
}
[class*="savingsScss-discount__label"]::after {
  content: "Punkty payback: ";
  font-size: 13px;
}

[class*="savingsScss-discount__value"] {
  position: relative;
}
[class*="savingsScss-discount__value"]::after {
  content: "";
  background: #fff;
  position: absolute;
  width: 40px;
  right: 0;
  z-index: 1;
  height: 100%;
}
/* << << << payback end << */
  `,
  greenApla: `
/* >> greenApla start v1 >> >> >> */
.savingsScss-discount__label-2nU,
.savingsScss-discount__value-1UE {
  background: rgb(150, 245, 59);
  padding: 3px 5px;
  font-weight: bold;
  margin-top: -3px;
}

.savingsScss-discount__label-2nU {
  margin-right: 0px;
}
/* << << << greenApla end << */
  `,
  bannerColor: `
/* >> bannerColor start v1 >> >> >> */
[class*="promotionTimerScss-title"],
[class*="promotionCodeScss-title"],
[class*="promotionBtnScss-cta-3wx"]{
    color: #96f53b;
    border-color: #96f53b;
}
/* << << << bannerColor end << */
  `,
  singleCategoryInOldMenu: `
/* >> singleCategoryInOldMenu start v1 >> >> >> */
[class*=primaryItemDesktopCss-root-],
[class*=primaryItemMobileCss-button] {
  display: none;
}
/* << << << singleCategoryInOldMenu end << */
  `,
};

export default cssSnippets;
