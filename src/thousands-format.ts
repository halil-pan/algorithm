export const thousandsFormat = (number: number): string => {
  let formattedNumber = '';

  const numberSplited = String(number).split('');

  for (let i = numberSplited.length - 1; i >= 0; i--) {
    formattedNumber = numberSplited[i] + formattedNumber;
    if ((numberSplited.length - i) % 3 === 0 && i !== 0) {
      formattedNumber = ',' + formattedNumber;
    }
  }

  return formattedNumber;
};
