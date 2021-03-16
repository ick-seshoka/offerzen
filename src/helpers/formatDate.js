import moment from "moment";

export const formatDate = (date) => {
  const now = moment();
  const dayDiff = now.diff(moment(date), "days");
  var displayDate;

  if (dayDiff === 1) {
    displayDate = "yesterday";
  } else if (dayDiff > 1) {
    displayDate = moment(date).format("DD/MM/YYYY");
  } else if (dayDiff === 0) {
    displayDate = moment(date).format("HH:mm");
  }

  return displayDate;
};
