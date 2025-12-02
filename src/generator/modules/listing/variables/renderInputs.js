import {
  formatExcel,
  excelHeaders,
  minNumOfGidsForSorting,
  clearTextAreaOnKey,
} from "./";

import "./renderInputs.scss";

const renderInputs = (module) => {
  const gidsInput = module.querySelector("textarea");
  const headersMarks = JSON.stringify(excelHeaders)
    .replaceAll('"', "")
    .replaceAll("[", " ")
    .replaceAll("]", " ")
    .replaceAll("{", " ")
    .replaceAll("}", " ")
    .replaceAll(" , ", " | ");
  module.querySelector(".chill-btn-container").insertAdjacentHTML(
    "beforeend",
    `
    <button class="chill-btn gid-list-taker new-gids" title="Skopiuj i wklej tabelę z Excela. Oznaczenia kolumn: 
          ${headersMarks}">Zastąp</button>
    <button class="chill-btn gid-list-taker gids-to-delete" title="Wklej gidy do usunięcia odzielone przecinkami (akceptowalne białe znaki) lub tabelę z Excela. Oznaczenia kolumny:  
          ${excelHeaders[0].gid}">Usuń</button>
          <button class="chill-btn gid-list-taker gids-to-add" title="Skopiuj i wklej tabelę z Excela. Oznaczenia kolumn: 
          ${headersMarks}">Dodaj</button>
          <button class="chill-btn gid-list-taker gids-to-update" title="Skopiuj i wklej tabelę z Excela. Oznaczenia kolumn:
          ${headersMarks}">Aktualizuj</button>
          <button class="chill-btn gid-list-taker gids-to-place" title="g: gidy, l: miejsce">Wstaw na miejsce</button>
          <button class="chill-btn gid-list-taker the-biggest-priority" title="Skopiuj i wklej tabelę z Excela. Oznaczenia kolumn:
          ${headersMarks}">Wartość najw. priorytetu</button>
    `
  );
  const manageSorting = () => {
    setTimeout(() => {
      const sortingInput = module.querySelector("[id^=products_sorting_]");
      if (sortingInput) {
        const numOfGids = gidsInput.value.split(";").length - 1;
        const sortingInputVal = sortingInput.checked;
        const sortingLabel = module.querySelector("[for^=products_sorting_]");
        const templateSelectVal = module.querySelector(
          "[id^=products_template_]"
        ).value;
        if (numOfGids <= minNumOfGidsForSorting && sortingInputVal) {
          sortingLabel.click();
        } else if (
          numOfGids > minNumOfGidsForSorting &&
          !sortingInputVal &&
          templateSelectVal !== "slider"
        ) {
          sortingLabel.click();
        }
      }
    }, 500);
  };
  const validation = (listValue) => {
    const listValueArr = listValue.split(";").slice(1);
    const gidsOnly = listValueArr.map((el) => el.slice(0, el.indexOf(",")));

    const duplicates = () => {
      return gidsOnly.length - Array.from(new Set(gidsOnly)).length;
    };

    const discountsEqOrLessThanZero = () => {
      const gidsWithBugInDiscount = listValueArr
        .map((el) => {
          const arr = el.split(",");
          return {
            gid: arr[0],
            discount: arr[2],
          };
        })
        .filter((el) => {
          return el.discount <= 0 && el.discount.length;
        });

      return gidsWithBugInDiscount.map((el) => el.gid);
    };

    const numberTypeInvalid = () => {
      const rows = listValueArr.map((el) => {
        return el.split(",");
      });
      const inputsThatRequireNumber = rows
        .map((el) => el.filter((el, i) => i !== 5))
        .flat();
      const notNumValues = inputsThatRequireNumber.filter((el) => isNaN(el));
      return notNumValues;
    };

    const noMinPrice = () => {
      const gidsWithDiscountAndNoMinPrice = listValueArr
        .map((el) => {
          const arr = el.split(",");
          return {
            gid: arr[0],
            discountPercent: arr[1],
            discount: arr[2],
            minPrice: arr[6],
          };
        })
        .filter((el) => {
          return el.discount.length || el.discountPercent.length
            ? !el.minPrice.length
            : false;
        });

      return gidsWithDiscountAndNoMinPrice.map((el) => el.gid);
    };

    const _duplicates = duplicates();
    const _discountsEqOrLessThanZero = discountsEqOrLessThanZero();
    const _numberTypeInvalid = numberTypeInvalid();
    const _noMinPrice = noMinPrice();

    console.log(
      `
Walidacja wklejanej listy:
- zdublowane gidy: ${_duplicates}
- nieprawidłowy rabat kwotowy dla gidów: ${
        _discountsEqOrLessThanZero.length
          ? _discountsEqOrLessThanZero.join(", ")
          : "nie znaleziono"
      }
- wartości inne niż liczbowe w polach dla wartości liczbowych: ${
        _numberTypeInvalid.length
          ? _numberTypeInvalid.join(", ")
          : "nie znaleziono"
      }
- gidy mające rabat kwotowy lub procentowy i nie posiadające ceny min: ${
        _noMinPrice.length ? _noMinPrice.join(", ") : "nie znaleziono"
      }
`
    );
    return (
      _duplicates === 0 &&
      !_discountsEqOrLessThanZero.length &&
      !_numberTypeInvalid.length &&
      !_noMinPrice.length
    );
  };

  const newGids = () => {
    const customGidsInput = module.querySelector(".chill-btn.new-gids");
    customGidsInput.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.readText().then((clipText) => {
        const newValue = formatExcel(clipText);
        const isBug = !validation(newValue);
        setTimeout(() => {
          gidsInput.value = newValue;
          clearTextAreaOnKey(
            customGidsInput,
            isBug ? "Błędy na liście" : "Nie znaleziono błędów",
            isBug
          );
          manageSorting();
        }, 100);
      });
    });
  };
  newGids();

  const addGids = () => {
    const customGidsInput = module.querySelector(".chill-btn.gids-to-add");
    customGidsInput.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.readText().then((clipText) => {
        const oldValue = String(gidsInput.value);
        const newValue = formatExcel(clipText, true);
        const newValueForValidation = formatExcel(clipText);

        const alreadyOnList = newValue
          .split(";")
          .map((item) => item.substring(0, item.indexOf(",")))
          .filter((item) => (Number(item) ? oldValue.includes(item) : false));

        console.log(
          `Gidy [${
            alreadyOnList.length
          }] są już na lp i zostały dodane ponownie:  ${alreadyOnList.join(
            ","
          )}`,
          { alreadyOnList }
        );
        const isBug = !validation(newValueForValidation);
        setTimeout(() => {
          gidsInput.value = oldValue + ";" + newValue;
          clearTextAreaOnKey(
            customGidsInput,
            isBug
              ? `Błędy i ${alreadyOnList.length} doubli`
              : `${alreadyOnList.length} doubli`,
            alreadyOnList.length || isBug
          );
        }, 100);
        manageSorting();
      });
    });
  };
  addGids();

  const updatingGids = () => {
    const customGidsInput = module.querySelector(".chill-btn.gids-to-update");

    customGidsInput.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.readText().then((clipText) => {
        const listWithChanges = formatExcel(clipText);

        const actualGids = gidsInput.value;

        const makeObjects = (actualGids) => {
          const listArr = actualGids
            .replace(/\s/g, ";")
            .split(";")
            .filter((el) => el.length);
          const listArrOfObj = listArr.map((el) => {
            const _el = el.split(",");
            return {
              gid: _el[0],
              proc: _el[1],
              disc: _el[2],
              price: _el[3],
              lp: _el[4],
              code: _el[5],
              min: _el[6],
            };
          });
          return listArrOfObj;
        };

        const listArrOfObj = makeObjects(actualGids);
        const listWithChangesArrOfObj = makeObjects(listWithChanges);

        const changedGids = [];
        const notChangedGids = [];
        const newListArrOfObj = listArrOfObj.map((el, i) => {
          const newObj = listWithChangesArrOfObj.find(
            (_el) => el.gid === _el.gid
          );
          if (newObj) {
            const { gid, proc, disc, price, lp, code, min } = newObj;
            if (Number(gid)) {
              changedGids.push(gid);
            }
            return {
              gid: gid !== "" ? gid : el.gid,
              proc: proc !== "" ? proc : el.proc,
              disc: disc !== "" ? disc : el.disc,
              price: price !== "" ? price : el.price,
              lp: lp !== "" ? lp : el.lp,
              code: code !== "" ? code : el.code,
              min: min !== "" ? min : el.min,
            };
          } else {
            notChangedGids.push(el.gid);
            return el;
          }
        });

        const newList = newListArrOfObj
          .map((el) => {
            const { gid, proc, disc, price, lp, code, min } = el;
            return [gid, proc, disc, price, lp, code, min].join(",");
          })
          .join(";");

        const notFoundGids = listWithChangesArrOfObj
          .filter((a) => !listArrOfObj.some((b) => b.gid.includes(a.gid)))
          .map((c) => c.gid);

        const isBug = !validation(listWithChanges);

        console.log(
          `
  Aktualizuj gidy:
  - zaktualizowano (niezależnie od tego czy stara warotość była taka sama czy nie) ${
    changedGids.length
  }: ${changedGids.join(",")}
  - nie znaleziono ${notFoundGids.length}: ${notFoundGids.join(",")}
  - nie zaktualizowano ${notChangedGids.length}: ${notChangedGids.join(",")}
          `,
          { changedGids, notChangedGids, notFoundGids }
        );
        setTimeout(() => {
          gidsInput.value = newList;
          clearTextAreaOnKey(
            customGidsInput,
            isBug
              ? `Błędy na liście`
              : `${changedGids.length} zaktualizowanych`,
            notFoundGids.length || isBug
          );
        }, 100);
      });
    });
  };
  updatingGids();

  const deletingGids = () => {
    const customGidsInput = module.querySelector(".chill-btn.gids-to-delete");
    customGidsInput.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.readText().then((clipText) => {
        const pastedData = clipText;

        const gidsToDelete =
          !pastedData.toLowerCase().includes("g") &&
          !pastedData.toLowerCase().includes("neo")
            ? pastedData
                .trim()
                .replace(/\s/g, "")
                .split(",")
                .filter((el) => el.length)
                .map((item) => item.replace(";", ""))
            : formatExcel(pastedData)
                .split(",,,,,,")
                .map((el) => el.replace(";", ""))
                .filter((el) => el.length)
                .slice(1);
        const deletedGids = [];

        const actualGidsData = gidsInput.value.split(";");
        const actualGids = actualGidsData
          .map((item) => item.substring(0, item.indexOf(",")))
          .filter((item) => Number(item));
        const newGids = actualGidsData.filter((item) => {
          const gid = Number(item)
            ? item
            : item.substring(0, item.indexOf(","));
          const condition = !gidsToDelete.some((i) => gid === i);
          if (!condition) {
            deletedGids.push(gid);
          }
          return condition;
        });
        const notFoundGids = gidsToDelete.filter(
          (x) => !actualGids.includes(x)
        );

        console.log(
          `
Usuń:
- usunięto ${deletedGids.length} z ${gidsToDelete.length}: ${deletedGids.join(
            ","
          )}
- nie znaleziono:  ${notFoundGids.join(",")}
`,
          { deletedGids, notFoundGids }
        );

        setTimeout(() => {
          gidsInput.value = newGids.join(";");
          clearTextAreaOnKey(
            customGidsInput,
            `usunięto ${deletedGids.length} z ${gidsToDelete.length}`,
            notFoundGids.length
          );
          manageSorting();
        }, 100);
      });
    });
  };
  deletingGids();

  const placingGids = () => {
    const customGidsInput = module.querySelector(".chill-btn.gids-to-place");
    customGidsInput.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.readText().then((clipText) => {
        const oldValue = String(gidsInput.value);
        const newValue = formatExcel(clipText, true);
        const newValueForValidation = formatExcel(clipText);
        const oldValueArr = oldValue.split(";");
        const newValueArr = newValue.split(";");
        const header = oldValueArr.shift();
        const oldValueArrOfArr = oldValueArr
          .map((el) => el.split(","))
          .sort((a, b) => {
            const wartoscA = a[4];
            const wartoscB = b[4];
            if (wartoscA === "" && wartoscB !== "") {
              return 1;
            }

            if (wartoscA !== "" && wartoscB === "") {
              return -1;
            }
            const liczbaA = parseInt(wartoscA);
            const liczbaB = parseInt(wartoscB);

            return liczbaB - liczbaA;
          });

        newValueArr
          .map((el) => el.split(","))
          .forEach((el) => {
            const index = el[4];
            oldValueArrOfArr.splice(index - 1, 0, el);
          });
        let newValueArrOfArr = oldValueArrOfArr
          .map((el, i) => {
            el[4] = 10000 - i;

            return el.join(",");
          })
          .join(";");
        newValueArrOfArr = header + ";" + newValueArrOfArr;

        gidsInput.value = newValueArrOfArr;
        const isBug = !validation(newValueForValidation);
        setTimeout(() => {
          clearTextAreaOnKey(customGidsInput, isBug ? `Błędy` : ``, isBug);
        }, 100);
      });
    });
  };
  placingGids();

  const getTheBiggestPriority = () => {
    const customGidsInput = module.querySelector(
      ".chill-btn.the-biggest-priority"
    );

    customGidsInput.addEventListener("click", (e) => {
      e.preventDefault();

      const actualGids = gidsInput.value;

      const makeObjects = (actualGids) => {
        const listArr = actualGids
          .replace(/\s/g, ";")
          .split(";")
          .filter((el) => el.length);
        const listArrOfObj = listArr.map((el) => {
          const _el = el.split(",");
          return {
            gid: _el[0],
            proc: _el[1],
            disc: _el[2],
            price: _el[3],
            lp: _el[4],
            code: _el[5],
            min: _el[6],
          };
        });
        return listArrOfObj;
      };
      const priorities = makeObjects(actualGids)
        .map((el) => Number(el.lp))
        .filter((el) => !isNaN(el));
      const maxPriority = Math.max(...priorities);

      customGidsInput.innerHTML = `${maxPriority} (copied)`;
      navigator.clipboard.writeText(maxPriority);
      setTimeout(() => {
        customGidsInput.innerHTML = "Wartość najw. priorytetu";
      }, 3000);
    });
  };
  getTheBiggestPriority();
};
export default renderInputs;
