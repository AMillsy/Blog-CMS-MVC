module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    const newDate = new Date(date.setFullYear(date.getFullYear()));

    return newDate.toLocaleDateString("en", {
      year: "2-digit",
      day: "2-digit",
      month: "2-digit",
    });
  },
};
