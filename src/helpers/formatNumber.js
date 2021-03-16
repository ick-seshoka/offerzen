export const formatNumber = (number) => {
  return "R" + parseFloat(number).toLocaleString("en").replace(",", " ");
};
