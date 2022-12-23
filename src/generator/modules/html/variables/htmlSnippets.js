const htmlSnippets = {
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

  const runScriptForElement = (requiredElementSelector, callback) => {
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

  runScriptForElement(".landing-page-iframe", script);
</script>  
  `,
  observer: `
<script>
  const script = () => {
    console.warn(
      "Kod landing page'a jest już na stronie"
    );
  };

  const runScriptForElement = (requiredElementSelector, callback) => {
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
  runScriptForElement(".landing-page", script);

  // requiredElementSelector - check if element with this selector has been rendered
  // callback - callback
</script>
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
  bannerUpd: `
<!-- Banner update -->    
<script>
  const update_banner = () => {
    const bannerHero = document.querySelector(
      "img[alt~=update_banner-oryginal]"
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
export default htmlSnippets;
