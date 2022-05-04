export const quickSort = (array: number[]): number[] => {
  if (array.length <= 1) {
    return array;
  }

  const midIndex = Math.floor(array.length / 2);
  const leftArray = [];
  const rightArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== midIndex) {
      if (array[i] < array[midIndex]) {
        leftArray.push(array[i]);
      } else {
        rightArray.push(array[i]);
      }
    }
  }

  return [...quickSort(leftArray), array[midIndex], ...quickSort(rightArray)];
};
