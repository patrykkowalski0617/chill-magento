import { excelHeaders } from "./";

const formatExcel = (excelTable, withoutHeaders = false) => {
  const rows = excelTable
    .replace(/"((?:[^"]*(?:\r\n|\n\r|\n|\r))+[^"]+)"/gm, (match, p1) => {
      // This function runs for each cell with multi lined text.
      return (
        p1
          // Replace any double double-quotes with a single
          // double-quote
          .replace(/""/g, '"')
          // Replace all new lines with spaces.
          .replace(/\r\n|\n\r|\n|\r/g, " ")
      );
    })
    // Split each line into rows
    .split(/\r\n|\n\r|\n|\r/g)
    .map((el) => el.split("\t"))
    .map((el) => el.map((el) => el.replaceAll(",", ".")));

  const dataIndexes = excelHeaders.map((el) => {
    const validStrings = Object.values(el).flat();
    const tableHeaders = rows[0].map((tableHeader) =>
      tableHeader.toLowerCase()
    );
    const stringToFind = validStrings.find(
      (string) => tableHeaders.indexOf(string) >= 0
    );

    const index = tableHeaders.indexOf(stringToFind);
    return {
      ...el,
      index,
    };
  });

  const filtredRows = rows.map((el, i) =>
    dataIndexes.map((_el) => (el[_el.index] ? el[_el.index] : ""))
  );

  filtredRows[0] = filtredRows[0].map((headerName, i) =>
    headerName.length ? Object.values(excelHeaders[i]).flat()[0] : ""
  );

  const newValue = filtredRows
    .map((el, i) => (withoutHeaders && !i ? "" : el.join(",")))
    .join(";")
    .replaceAll("%", "")
    .replace(";,,,,,,", "");
  return withoutHeaders ? newValue.replace(";", "") : newValue;
};

export default formatExcel;
