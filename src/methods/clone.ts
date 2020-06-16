export default (element: any): any => {
  return JSON.parse(JSON.stringify(element));
};
