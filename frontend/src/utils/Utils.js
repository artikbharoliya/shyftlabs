
// method to generate the date in human readable form.
// e.g. 1998-10-08 (YYYY-MM-DD)
export const getPrintableDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}