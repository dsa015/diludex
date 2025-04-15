const toUpperCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const filter = (val, subset) => {
  return subset.filter((result) => {
    return result.name.toLowerCase().includes(val.toLowerCase());
  });
};
const filtered = (val, subset) => {
  return val.length > 0 ? filter(val, subset) : subset;
};
export {
  filtered as f,
  toUpperCase as t
};
