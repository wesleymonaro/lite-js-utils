export default (
  value: number,
  showSignal = true,
  signal = 'R$',
  chunkDelimiter = '.',
  decimalDelimiter = ',',
  decimalLength = 2,
): string => {
  const chunkLength = 3;
  const result = `\\d(?=(\\d{${chunkLength}})+${
    decimalLength > 0 ? '\\D' : '$'
    })`;
  const num = value.toFixed(Math.max(0, ~~decimalLength));

  return (
    (showSignal ? signal : '') +
    (decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(
      new RegExp(result, 'g'),
      `$&${chunkDelimiter}`,
    )
  );
};
