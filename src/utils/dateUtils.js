/* eslint-disable import/prefer-default-export */
/**
 * Returns a date string like `Sep. 2021`.
 *
 * @param {Date} date
 * @returns {string} the formatted date string.
 *
 */
export const getFormattedDate = (date) => {
  if (date === undefined) {
    return undefined;
  }

  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  return `${month}. ${year}`;
};
