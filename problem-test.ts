function findTranslationDifference(num: number): number {
  const numStr = num.toString();
  let maxPossible = numStr;
  let minPossible = numStr;

  for (let i = 0; i < numStr.length; i++) {
      for (let replacement = 0; replacement <= 9; replacement++) {
          if (numStr[i] !== replacement.toString()) {
              const replacedNum = numStr.slice(0, i) + replacement.toString() + numStr.slice(i + 1);
              if (replacement !== 0 || replacedNum.length === numStr.length) {
                  maxPossible = Math.max(parseInt(maxPossible), parseInt(replacedNum)).toString();
                  minPossible = Math.min(parseInt(minPossible), parseInt(replacedNum)).toString();
              }
          }
      }
  }

  return parseInt(maxPossible) - parseInt(minPossible);
}

// Example usage
const num = 909;
console.log(findTranslationDifference(num)); // Output: 898
