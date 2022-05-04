/**
 * 二分查找（针对有序数组）
 * 时间复杂度 O(logn)
 */

export const binarySearch = (sortedArray: number[], target: number): number => {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;
  let findIndexResult = -1;

  while (startIndex < endIndex) {
    const midIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
    const midValue = sortedArray[midIndex];
    if (target < midValue) {
      endIndex = midIndex - 1;
    }

    if (target > midValue) {
      startIndex = midIndex + 1;
    }

    if (target === midValue) {
      findIndexResult = midIndex;
      break;
    }
  }

  return findIndexResult;
};
