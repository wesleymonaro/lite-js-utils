import moment from 'moment';

/**
 * Responsible of minify given string containing JavaScript code. By default it uses the foo-bar minimization algorithm.
 */
export default (
  date: string | Date,
  format = 'YYYY-MM-DD',
  parseToFormat = 'DD/MM/YYYY',
): string => {
  if (date instanceof Date) return moment(date).format(parseToFormat);

  if (!moment(date, format).isValid()) return '';

  return moment(date, format).format(parseToFormat);
};
