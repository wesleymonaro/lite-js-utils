export default (array: any): any | undefined => {
  return array != null && array.length ? array[0] : undefined;
};
