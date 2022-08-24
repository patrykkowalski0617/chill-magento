import { clearTextAreaOnKey, formatExcel } from "./";
import "./renderInputs.scss";
const renderInputs = (module) => {
  const gidsInput = module.querySelector("textarea");

  module.querySelector(".chill-btn-container").insertAdjacentHTML(
    "beforeend",
    `
          <textarea class="chill-gids-input new-gids" placeholder="Nowe gidy" title="Skopiuj i wklej tabelę z Excela. Oznaczenia kolumn: gid: g, rabat procentowy: p, rabat kwotowy: r, cena: c, priorytet kolejności: l, kod rabatowy: k, cena minimalna: m"></textarea>
          <textarea class="chill-gids-input gids-to-delete" placeholder="Gidy do usunięcia" title="Wklej gidy do usunięcia odzielone przecinkami (akceptowalne białe znaki) lub tabelę z Excela. Oznaczenia kolumn: gid: g"></textarea>
          <textarea class="chill-gids-input gids-to-add" placeholder="Gidy do dodania" title="Skopiuj i wklej tabelę z Excela. Oznaczenia kolumn: gid: g, rabat procentowy: p, rabat kwotowy: r, cena: c, priorytet kolejności: l, kod rabatowy: k, cena minimalna: m"></textarea>
          <textarea class="chill-gids-input gids-to-update" placeholder="Gidy do aktualizacji" title="Skopiuj i wklej tabelę z Excela. Oznaczenia kolumn: gid: g, rabat procentowy: p, rabat kwotowy: r, cena: c, priorytet kolejności: l, kod rabatowy: k, cena minimalna: m"></textarea>
          
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

      const newListArrOfObj = listArrOfObj.map((el) => {
        const newObj = listWithChangesArrOfObj.find(
          (_el) => el.gid === _el.gid
        );
        if (newObj) {
          const { gid, proc, disc, price, lp, code, min } = newObj;
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
          return el;
        }
      });
      const newList = newListArrOfObj
        .map((el) => {
          const { gid, proc, disc, price, lp, code, min } = el;
          return [gid, proc, disc, price, lp, code, min].join(",");
        })
        .join(";");

      setTimeout(() => {
        gidsInput.value = newList;
        clearTextAreaOnKey(customGidsInput);
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
      const gidsToDelete = !pastedData.includes("g")
        ? pastedData
            .trim()
            .replace(/\s/g, "")
            .split(",")
            .filter((el) => el.length)
            .map((item) => item.replace(";", ""))
        : formatExcel(pastedData)
            .split(",,,,,,;")
            .map((item) => item.replace(",,,,,,", ""))
            .splice(1);
      const actualGids = gidsInput.value.split(";");
      const newGids = actualGids.filter((item) => {
        const gid = Number(item) ? item : item.substring(0, item.indexOf(","));
        return !gidsToDelete.some((i) => gid.includes(i));
      });

      setTimeout(() => {
        gidsInput.value = newGids.join(";");
        clearTextAreaOnKey(customGidsInput);
      }, 100);
    });
  };
  deletingGids();
};
export default renderInputs;
