/* eslint-disable import/prefer-default-export */
/**
 * Returns a date string like `Sep. 2021`.
 *
 * @param {Date} date
 * @returns {string} the formatted date string.
 *
 */
export const getFormattedDate = (date, dateFormat) => {
  if (date === undefined) {
    return undefined;
  }

  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'short' });

  switch (dateFormat) {
    case 'year':
      return `${year}`;
    case 'month':
    default:
      return `${month}. ${year}`;
  }
};
