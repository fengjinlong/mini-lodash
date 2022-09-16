export function join(arr, separator = "") {
  return arr === null ? "" : Array.prototype.join.call(arr, separator);
}
export function chunk(arr, size = 1) {
  let arr1 = arr.splice(0, size);
  return [arr1, arr];
}
