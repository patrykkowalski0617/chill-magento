const defaultFix = ({ module }) => {
  const select = module.querySelector("[id*=set_id__]");

  select.selectedIndex = 4;
};

export default defaultFix;
