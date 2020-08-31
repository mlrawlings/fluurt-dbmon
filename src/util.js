export function removeWhitespace(string) {
  return string.replace(/\n\s*/g, "");
}

export const getNode = String.fromCharCode(33);
export const before = String.fromCharCode(35);
export const after = String.fromCharCode(36);
export const inside = String.fromCharCode(37);
export const replace = String.fromCharCode(38);

export function next(number) {
  return toCharString(number, 93, 126);
}
export function over(number) {
  return toCharString(number, 58, 91);
}
export function out(number) {
  return toCharString(number, 39, 49);
}

function toCharString(number, startCharCode, endCharCode) {
  const total = endCharCode - startCharCode + 1;
  let value = "";
  while (number > total) {
    value += String.fromCharCode(endCharCode);
    number -= total;
  }
  return value + String.fromCharCode(startCharCode + number - 1);
}