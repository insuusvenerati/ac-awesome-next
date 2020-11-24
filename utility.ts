export const toUpperCase = (word: string) => {
  if (typeof word !== "string") return;
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const numMonths: any = {
  1: "Jan",
  2: "Feb",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

export function toMonthName(monthNum: number) {
  return numMonths[monthNum];
}

export function toMonthNameArray(monthNumArray: Array<number>) {
  return monthNumArray.map((month) => numMonths[month]);
}
