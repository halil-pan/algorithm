/**
 * 找出小于 n 的所有对称数
 */

const isPalindrome = (x: number): boolean => {
  const xArray = String(x).split('');
  if (xArray.length === 1) {
    return true;
  }

  let startIndex = 0;
  let endIndex = xArray.length - 1;
  while (startIndex < endIndex) {
    if (xArray[startIndex] === xArray[endIndex]) {
      startIndex++;
      endIndex--;
    } else {
      return false;
    }
  }

  return true;
};

export const findPalindromeNumbers = (n: number): number[] => {
  const palindromeNumbers: number[] = [];

  for (let i = 1; i < n; i++) {
    if (isPalindrome(i)) {
      palindromeNumbers.push(i);
    }
  }

  return palindromeNumbers;
};
