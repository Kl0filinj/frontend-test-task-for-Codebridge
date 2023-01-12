const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
// 2022-12-20T15:32:04.000Z
export function getDateMonth(date) {
  const year = date.slice(0, 4);
  const month = months[Number(date.slice(5, 7)) - 1];
  const day = date.slice(8, 10);

  return `${month} ${day}th, ${year}`;
}
