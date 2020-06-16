export default (text: string | null): string => {
  return text ? text.toLowerCase() : '';
};
