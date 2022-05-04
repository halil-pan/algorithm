/**
 * 输入一个递增的数字数组，和一个数字 n，求和等于 n 的两个数字
 * 例如输入 [1, 2, 4, 7, 11, 15] 和 15，返回两个数 [4, 11]
 */

export const twoNumbersSum = (sortedArray: number[], sumTarget: number): number[] => {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  const result: number[] = [];

  while (startIndex < endIndex) {
    const sum = sortedArray[startIndex] + sortedArray[endIndex];
    if (sum < sumTarget) {
      startIndex++;
    }

    if (sum > sumTarget) {
      endIndex--;
    }

    if (sum === sumTarget) {
      result.push(sortedArray[startIndex], sortedArray[endIndex]);
      break;
    }
  }

  return result;
};
