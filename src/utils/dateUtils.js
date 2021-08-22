/* eslint-disable import/prefer-default-export */
/**
 * Returns a date string like `Sep. 2021`.
 *
 * @param {string} date string
 * @returns {string} the formatted date string.
 *
 */
export const getFormattedDate = (date, dateFormat) => {
  const dateObj = new Date(date);

  const year = dateObj.getFullYear();
  const month = dateObj.toLocaleString('default', { month: 'short' });

  switch (dateFormat) {
    case 'year':
      return `${year}`;
    case 'month':
    default:
      return `${month}. ${year}`;
  }
};
