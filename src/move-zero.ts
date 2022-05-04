/**
 * 将数组种所有的 0 都移动到末尾，例如输入 [1, 0, 3, 0, 11, 0] 输出 [1, 3, 11, 0, 0, 0]
 */

export const moveZero = (array: number[]): number[] => {
  let zeroIndex = -1;

  // @ts-expect-error: use entries
  for (const [index, item] of array.entries()) {
    // 先找到第一个 0
    if (zeroIndex === -1 && item === 0) {
      zeroIndex = index;
    }

    // 找到非 0 就跟 0 的位置交换
    if (item !== 0 && zeroIndex !== -1) {
      const swapTemporary = array[index];
      array[index] = array[zeroIndex];
      array[zeroIndex] = swapTemporary;
      zeroIndex++;
    }
  }

  return array;
};
