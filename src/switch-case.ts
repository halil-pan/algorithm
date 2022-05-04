export const switchCase = (text: string): string => {
  const textSplited = text.split('');

  const lowerCaseRange = ['a'.charCodeAt(0), 'z'.charCodeAt(0)];
  const upperCaseRange = ['A'.charCodeAt(0), 'Z'.charCodeAt(0)];

  const textTransformed = [];

  for (const item of textSplited) {
    const charCode = item.charCodeAt(0);
    if (charCode >= lowerCaseRange[0] && charCode <= lowerCaseRange[1]) {
      textTransformed.push(item.toUpperCase());
    }

    if (charCode >= upperCaseRange[0] && charCode <= upperCaseRange[1]) {
      textTransformed.push(item.toLowerCase());
    }
  }

  return textTransformed.join('');
};
