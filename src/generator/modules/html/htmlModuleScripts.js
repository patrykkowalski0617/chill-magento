const htmlModuleScripts = {
  runClock24Before: `<script>
    const are24hLeft =
      document.querySelector(
        'body [class*="clockDefaultScss-list__item-"]:first-child span'
      ).innerHTML === "0";
    const clockSection = document.querySelector(
      '[class*="clockDefaultScss-grid_container"]'
    );
    if (are24hLeft) {
      clockSection.style.display = "block";
    }
  </script>
  `,
  lpIframe: `
  <!-- landing-page-iframe -->
  <iframe
    class="landing-page-iframe hidden-iframe"
    style="width: 100%; min-height: 110vh; overflow: hidden"
    src="https://www.neonet.pl/images24/promocje/"
    frameborder="0"
  ></iframe>
  <style>
    .landing-page-iframe.hidden-iframe {
      opacity: 0;
    }
  </style>
  
  <script>
    const script = () => {
      function resizeIframe(obj) {
        const height =
          Number(obj.contentWindow.document.documentElement.scrollHeight) + 20;
  
        obj.style.height = height + "px";
      }
      const iframe = document.querySelector(".landing-page-iframe");
      iframe.classList.remove("hidden-iframe");
      resizeIframe(iframe);
    };
  
    const onElementReady = (requiredElementSelector, callback) => {
      const observerOptions = {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true,
        subtree: true,
      };
    
      let wasTheScriptRun = false;
      const runScript = (observer) => {
        wasTheScriptRun = true;
        observer.disconnect();
        callback();
      };
      const observer = new MutationObserver((mutation) => {
        const requiredElement = document.querySelector(requiredElementSelector);
        if (requiredElement && !wasTheScriptRun) {
          runScript(observer);
        }
      });
      observer.observe(document.body, observerOptions);
    };
  
    onElementReady(".landing-page-iframe", script);
  </script>  
    `,
  observer: `
  <script>
    const script = () => {
      console.warn(
        "Kod landing page'a jest już na stronie"
      );
    };
  
    const onElementReady = (requiredElementSelector, callback) => {
      const observerOptions = {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true,
        subtree: true,
      };
    
      let wasTheScriptRun = false;
      const runScript = (observer) => {
        wasTheScriptRun = true;
        observer.disconnect();
        callback();
      };
      const observer = new MutationObserver((mutation) => {
        const requiredElement = document.querySelector(requiredElementSelector);
        if (requiredElement && !wasTheScriptRun) {
          runScript(observer);
        }
      });
      observer.observe(document.body, observerOptions);
    };
    onElementReady(".landing-page", script);
  
    // requiredElementSelector - check if element with this selector has been rendered
    // callback - callback
  </script>
    `,
  css: `
    /* asterisks */
    .lp-asterisk {
      text-align: center;
      padding: 20px 0px;
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
    
    /* uppercase for menu */
    .primaryItemDesktopCss-root-b1p,
    .secondaryItemDesktopCss-root-p6v {
      text-transform: uppercase;
    }
    
    /* scroll fix */
    @media (min-width: 1100px) {
      html {
        scroll-padding-top: 60px;
      }
    }
    @media (min-width: 1600px) {
      body .productAttributesCss-attribute_landing-2dT,
      body .dataSectionCss-attribute-Web {
        max-height: unset;
      }
    }
    
    /* clock -  clock on teaser and lp */
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
    body [class*="clockDefaultScss-grid_container"] {
      display: none;
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
  `,
  cssApla: `
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
  `,
  cssBannerColor: `
  [class*="promotionTimerScss-title"],
  [class*="promotionCodeScss-title"],
  [class*="promotionBtnScss-cta-3wx"]{
     color: #96f53b;
     border-color: #96f53b;
  }
  `,
  cssSingleCategoryInMenu: `
  [class*=primaryItemDesktopCss-root-],
  [class*=primaryItemMobileCss-button] {
    display: none;
  }
  `,
  comment: `<!--  -->
    `,
  lpTitle: `
  <!-- lp-Title -->
  <div class="lp-title"></div>
    `,
  lpAsterisk: `
    <!-- lp-asterisk -->
  <div class="lp-asterisk"></div>
    `,
  YT: `
  <!-- YT -->
  <iframe
    class="lp-iframe"
    src=""
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
  <style>
    .lp-iframe {
      width: 100vw;
      height: calc(100vw * 0.5625);
      max-width: 1100px;
      max-height: calc(1100px * 0.5625);
      display: block;
      margin: auto;
    }
    @media (min-width: 1600px) {
      .lp-iframe {
        max-width: 1300px;
        max-height: calc(1300px * 0.5625);
      }
    }
  </style>
    `,
  fakeMenu: `
  <!-- fake-Menu -->
  <div class="menuDesktopScss-root-3xn menuDesktopScss-grid_container-5Vr">
    <div class="menuDesktopScss-inner-1GU">
      <button class="secondaryItemDesktopCss-root-p6v">Listing A</button>
      <button class="secondaryItemDesktopCss-root-p6v">Listing B</button>
    </div>
  </div>
  
  <!-- WARNING! When there is more than one fake menu script and style should be attached once. -->
  
  <style>
    [class*=productsScss-root_slider-] {
      display: none;
    }
    [class*=productsScss-root_slider-].show {
      display: block;
    }
  </style>
  
  <script>
  (function () {
    const lists = document.querySelectorAll(
      "[class*=productsScss-root_slider-]"
    );
    const btnsContainers = document.querySelectorAll(
      ".menuDesktopScss-inner-1GU"
    );
    
    const fakeMenu = (ranges = [[0, lists.length]]) => {
      ranges.forEach(([start, end], i) => {
        const listsInRange = Array.from(lists).filter(
          (el, i) => i >= start && i <= end
        );
  
        listsInRange[0].classList.add("show");
        listsInRange.forEach((list) => {
          list.classList.add("fake-menu-list");
        });
        const btns = btnsContainers[i].querySelectorAll(
          ".secondaryItemDesktopCss-root-p6v"
        );
        btns[0].classList.add("secondaryItemDesktopCss-selected-2pA");
        btns.forEach(function (btn, i) {
          btn.addEventListener("click", function (e) {
            const showedList = listsInRange.filter((el) =>
              el.classList.contains("show")
            )[0];
            const activeBtn = Array.from(btns).filter((el) =>
              el.classList.contains("secondaryItemDesktopCss-selected-2pA")
            )[0];
            if (activeBtn && showedList) {
              showedList.classList.remove("show");
              activeBtn.classList.remove(
                "secondaryItemDesktopCss-selected-2pA"
              );
            }
            listsInRange[i].classList.add("show");
            btns[i].classList.add("secondaryItemDesktopCss-selected-2pA");
  
            window.scrollBy(0, 1);
            window.scrollBy(0, -1);
          });
        });
      });
      document
        .querySelectorAll(
          '[class*="productsScss-root_slider-"]:not(.fake-menu-list)'
        )
        .forEach((el) => el.classList.add("show"));
    };
    fakeMenu();
  })();
  </script>  
  `,
  script: `
  <script>
    
  </script>
    `,
  style: `
  <style>
    
  </style>
      `,
  tipBtn: `
    <!-- Jak skorzystać z promocji? -->
    <button class="cartButtonCss-cart__button-3Oz custom-nn-btn">
      Jak skorzystać z promocji?
    </button>
    <style>
      .custom-nn-btn {
        margin: 20px auto 15px;
        height: 36px;
      }
      [class^="tipScss-root-"],
      .bannerAsStepsCss-root-3qb,
      .tipCss-root-1rW,
      .tipCss-title-1az {
        display: none;
      }
      [class^="tipScss-root-"].show,
      .bannerAsStepsCss-root-3qb.show {
        display: block;
      }
      .tipCss-root-1rW.show {
        display: flex;
      }
    </style>
    <script>
      document.querySelector(".custom-nn-btn").addEventListener("click", () => {
        document
          .querySelector(
            ".bannerAsStepsCss-root-3qb, .tipCss-root-1rW, [class^=tipScss-root-]"
          )
          .classList.toggle("show");
      });
    </script>
    
    
  `,
  maxFiveInRow: `
  <!-- Max Five In Row -->
  <style>
    @media (min-width: 756px) {
      .custom-slider .defaultCss-root-1kS {
        width: 50%;
      }
    }
    @media (min-width: 1100px) {
      .custom-slider .defaultCss-root-1kS {
        width: 33.3%;
      }
    }
    @media (min-width: 1600px) {
      .custom-slider .defaultCss-root-1kS {
        width: 20%;
      }
    }
  </style>
  <script>
    const maxFiveInRow = (listingIDNumber = 0) => {
      const onElementLoad = (
        elementSelector,
        callback,
        delay = 700,
        container = document
      ) => {
        let i = 0;
        const iterator = () => {
          i++;
          setTimeout(() => {
            if (container.querySelector(elementSelector)) {
              if (callback) {
                setTimeout(() => {
                  callback(elementSelector);
                }, delay);
              }
            } else if (i < 700) {
              iterator();
            } else {
              console.warn(
                "onElementLoad: stop working for " + elementSelector
              );
            }
          }, 50);
        };
        iterator();
      };
      onElementLoad("._4columnsCss-root-Fv2", (selector) => {
        document
          .querySelectorAll(selector)
          [listingIDNumber].classList.add("custom-slider");
      });
    };
    maxFiveInRow();
  </script>
    `,
  update_timer: () => {},
  banner: `
  <!-- Banner update -->    
  <script>
    const update_banner = () => {
      const bannerHero = document.querySelector(
        "img[class^=heroBannerScss], img[alt~=update_banner-oryginal]"
      );
      const bannersToSwap = Array.from(
        document.querySelectorAll("img[class^=bannerCss-banner][alt~=from]")
      );
      const date = new Date();
      const curentTime = date.getTime();
  
      // in case of any bugs in next lines of code
      setTimeout(() => {
        bannerHero.classList.add("update_banner-display");
      }, 0);
  
      const swapBanners = function (curentTime) {
        const imagesData = bannersToSwap
          .map((newBanner, i) => {
            const alt = newBanner.alt;
            const src = newBanner.src;
            const altDate = alt.substr(
              alt.indexOf("update_banner from") + 19
            );
            const startTime = new Date(altDate).getTime();
            if (isNaN(startTime)) {
              console.error(
                "update_banner: time of images[" + i + "] is not a number"
              );
            }
            return { src, startTime };
          })
          .filter(({ startTime }) => startTime < curentTime);
  
        const theLatestImage = imagesData.length
          ? imagesData.reduce(function (prev, current) {
              return prev.startTime > current.startTime ? prev : current;
            })
          : null;
  
        if (theLatestImage) {
          bannerHero.src = theLatestImage.src;
        } else {
          console.warn("update_banner: no banners to swap found");
        }
      };
  
      swapBanners(curentTime);
    };
  
    update_banner();
  </script>
  <style>
    img[class^="heroBannerScss"],
    img[alt~="update_banner-oryginal"],
    .bannerCss-banner-2E-[alt~="from"] {
      display: none;
    }
    img[alt~="update_banner-oryginal"].update_banner-display,
    img[class^="heroBannerScss"].update_banner-display {
      display: block;
    }
  </style>
    `,
  nbspFix: `
  <!-- nbspFix -->
  <script src="https://www.neonet.pl/images24/promocje/lib/nbsp_fix/nbsp_fix_3.js"></script>
  <script>
    setTimeout(() => {
      nbspFix({
        containerSelector: ".landing-page",
        howManyLetters: 1,
      });
    }, 2500);
  </script>
    `,
};

export default htmlModuleScripts;
