export const randomCount = (min, max) =>
  Math.floor(Math.random() * (max + 1 - min) + min);
export const checkStrLength = (str, maxLenght) => str.length <= maxLenght;

