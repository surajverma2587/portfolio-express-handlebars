const moment = require("moment");

const formatDateTime = (dateTime) => {
  return moment(dateTime).format("Do MMM, YYYY HH:mm:ss");
};

module.exports = {
  formatDateTime,
};
