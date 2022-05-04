/**
 * 计算第 n 个斐波那契数列的值
 */

export const fibonacci = (n: number): number => {
  if (n <= 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  let previousValue = 0;
  let currentValue = 1;
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = currentValue + previousValue;
    previousValue = currentValue;
    currentValue = result;
  }

  return result;
};
