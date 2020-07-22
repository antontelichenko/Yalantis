export default function usersInMonth(users) {
  let months = [];
  months = users.map((user) => {
    return {
      dateYear: +new Date(user.dob).getYear() + 1900,
      dateMonth: +new Date(user.dob).getMonth() + 1,
      names: [`${user.firstName} ${user.lastName}`],
      id: `${new Date(user.dob).getMonth()}${
        +new Date(user.dob).getYear() + 1900
      }`,
    };
  });
  months = months.map((item) => {
    months.forEach((subItem) => {
      if (item.id === subItem.id && item.names[0] !== subItem.names[0])
        item.names.push(subItem.names[0]);
    });
    return item;
  });
  let years = [];
  months.forEach((month) => {
    years.length === 0
      ? years.push({ year: month.dateYear, months: [] })
      : years.find(
          (year) =>
            month.dateYear !== year.year &&
            years.push({ year: month.dateYear, months: [] })
        );
  });
  years.forEach((year) => {
    months.forEach((month) => {
      if (month.dateYear === year.year) year.months.push(month);
    });
  });
  let res = [];
  for (let j = 0; j < years.length; j++) {
    for (let i = 0, v = 1; i < years[j].months.length || v <= 12; i++) {
      if (years[j].months[i].dateMonth === v) {
        res.push(years[j].months[i]);
        v++;
        i = 0;
      }
    }
  }
  return res;
}
