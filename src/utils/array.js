export const array = (start, end) =>
  Array.from({ length: end - start }, (_, k) => k + start);
