const formatExcel = (excelTable, withoutHeaders = false) => {
  const rows = excelTable
    .replace(/"((?:[^"]*(?:\r\n|\n\r|\n|\r))+[^"]+)"/gm, function (match, p1) {
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
    .map((el) => el.split("\t"));
  const dataSigns = [
    { gid: "g" },
    { proc: "p" },
    { disc: "r" },
    { price: "c" },
    { priority: "l" },
    { code: "k" },
    { min: "m" },
  ];

  const dataIndexes = dataSigns.map((el) => {
    const index = rows[0].indexOf(Object.values(el)[0]);
    return {
      ...el,
      index,
    };
  });

  const filtredRows = rows.map((el) =>
    dataIndexes.map((_el) => (el[_el.index] ? el[_el.index] : ""))
  );

  const newValue = filtredRows
    .map((el, i) => (withoutHeaders && !i ? "" : el.join(",")))
    .join(";")
    .replaceAll("%", "")
    .replace(";,,,,,,", "");
  return withoutHeaders ? newValue.replace(";", "") : newValue;
};

export default formatExcel;
