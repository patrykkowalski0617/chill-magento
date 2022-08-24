import { setAlts } from "../variables";
const fromDate = (module) => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  setAlts({
    module,
    dataString: ` update_banner from ${year}-${month}-${day}T00:00:00`,
    defaultVal: false,
  });
};

export default fromDate;
