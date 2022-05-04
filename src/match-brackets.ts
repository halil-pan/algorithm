const isLeftBracket = (token: string): boolean => ['{', '[', '('].includes(token);
const isRightBracket = (token: string): boolean => ['}', ']', ')'].includes(token);
const isMatchedBrackets = (leftBracket: string, rightBracket: string): boolean => {
  if (leftBracket === '{') {
    return rightBracket === '}';
  }

  if (leftBracket === '[') {
    return rightBracket === ']';
  }

  if (leftBracket === '(') {
    return rightBracket === ')';
  }

  return false;
};

/**
 * 括号匹配
 */
export const matchBrackets = (text: string): boolean => {
  const bracketsStack = [];
  const textLength = text.length;
  for (let i = 0; i < textLength; i++) {
    const token = text[i];
    if (isLeftBracket(token)) {
      bracketsStack.push(token);
    }

    if (isRightBracket(token)) {
      const topTokenInStack = bracketsStack[bracketsStack.length - 1];
      if (isMatchedBrackets(topTokenInStack, token)) {
        bracketsStack.pop();
      } else {
        return false;
      }
    }
  }

  return bracketsStack.length === 0;
};
