/**
 * 给一个字符串，找出连续最多的字符，以及次数
 * O(n) 跳步
 */

export const findContinousChar = (text: string): [string, number] => {
  const textArray = text.split('');
  let continuousChar = '';
  let continuousCharCount = 0;

  let continuousCharCountTemporary = 0;

  // @ts-expect-error: use entries
  for (const [i, char] of textArray.entries()) {
    if (i === 0 || char === textArray[i - 1]) {
      continuousCharCountTemporary++;
      if (continuousCharCountTemporary > continuousCharCount) {
        continuousChar = char;
        continuousCharCount = continuousCharCountTemporary;
      }
    } else {
      continuousCharCountTemporary = 1;
    }
  }

  return [continuousChar, continuousCharCount];
};
