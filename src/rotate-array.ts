/**
 * 数组旋转
 */
export const rotateArray = (array: number[], k: number): number[] => {
  if (k > array.length) {
    return array;
  }

  if (k < 0) {
    return array;
  }

  const part1 = array.slice(0, array.length - k);
  const part2 = array.slice(array.length - k, array.length);
  return part2.concat(part1);
};
