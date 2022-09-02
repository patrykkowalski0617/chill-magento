import { clearTextAreaOnKey, formatExcel, excelHeaders } from "./";
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
          <textarea class="chill-gids-input new-gids" placeholder="Nowe gidy" title="Skopiuj i wklej tabelę z Excela. Oznaczenia kolumn: 
          ${headersMarks}"></textarea>
          <textarea class="chill-gids-input gids-to-delete" placeholder="Gidy do usunięcia" title="Wklej gidy do usunięcia odzielone przecinkami (akceptowalne białe znaki) lub tabelę z Excela. Oznaczenia kolumny: 
          ${excelHeaders[0].gid}"></textarea>
          <textarea class="chill-gids-input gids-to-add" placeholder="Gidy do dodania" title="Skopiuj i wklej tabelę z Excela. Oznaczenia kolumn: 
          ${headersMarks}"></textarea>
          <textarea class="chill-gids-input gids-to-update" placeholder="Gidy do aktualizacji" title="Skopiuj i wklej tabelę z Excela. Oznaczenia kolumn:
          ${headersMarks}"></textarea>
          
          `
  );
  const newGids = () => {
    const customGidsInput = module.querySelector(".chill-gids-input.new-gids");
    customGidsInput.addEventListener("paste", (e) => {
      const newValue = formatExcel(e.clipboardData.getData("Text"));
      setTimeout(() => {
        gidsInput.value = newValue;
        clearTextAreaOnKey(customGidsInput);
      }, 100);
    });
  };
  newGids();

  const addGids = () => {
    const customGidsInput = module.querySelector(
      ".chill-gids-input.gids-to-add"
    );
    customGidsInput.addEventListener("paste", (e) => {
      const oldValue = gidsInput.value;
      const newValue = formatExcel(e.clipboardData.getData("Text"), true);

      setTimeout(() => {
        gidsInput.value = oldValue + ";" + newValue;
        clearTextAreaOnKey(customGidsInput);
      }, 100);
    });
  };
  addGids();

  const updatingGids = () => {
    const customGidsInput = module.querySelector(
      ".chill-gids-input.gids-to-update"
    );

    customGidsInput.addEventListener("paste", (e) => {
      const listWithChanges = formatExcel(e.clipboardData.getData("Text"));

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
      console.log(
        `
Gidy do aktualizacji:
- zaktualizowano ${changedGids.length}: ${changedGids.join(",")}
- nie zaktualizowano ${notChangedGids.length}: ${notChangedGids.join(",")}
        `,
        { changedGids, notChangedGids }
      );
      const newList = newListArrOfObj
        .map((el) => {
          const { gid, proc, disc, price, lp, code, min } = el;
          return [gid, proc, disc, price, lp, code, min].join(",");
        })
        .join(";");

      setTimeout(() => {
        gidsInput.value = newList;
        clearTextAreaOnKey(
          customGidsInput,
          `${changedGids.length} zaktualizowanych`
        );
      }, 100);
    });
  };
  updatingGids();

  const deletingGids = () => {
    const customGidsInput = module.querySelector(
      ".chill-gids-input.gids-to-delete"
    );
    customGidsInput.addEventListener("paste", (e) => {
      const pastedData = e.clipboardData.getData("Text");
      const gidsToDelete = pastedData.includes(",")
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
      const actualGids = gidsInput.value.split(";");
      const newGids = actualGids.filter((item) => {
        const gid = Number(item) ? item : item.substring(0, item.indexOf(","));
        const condition = !gidsToDelete.some((i) => gid.includes(i));
        if (!condition) {
          deletedGids.push(gid);
        }
        return condition;
      });
      console.log(
        `
Gidy do usunięcia:
- usunięto ${deletedGids.length}: ${deletedGids.join(",")}
`,
        { deletedGids }
      );

      setTimeout(() => {
        gidsInput.value = newGids.join(";");
        clearTextAreaOnKey(customGidsInput, `usunięto ${deletedGids.length}`);
      }, 100);
    });
  };
  deletingGids();
};
export default renderInputs;
