function findMinMaxDifference(number: number): number {
  const numberStr = number.toString();
  let maxNumber = '';
  let minNumber = '';
  for (let i = 0; i < numberStr.length; i++) {
    const digit = parseInt(numberStr[i]);
    const maxDigit = digit === 1 ? 9 : digit;
    const minDigit = digit === 8 ? 0 : digit;
    maxNumber += maxDigit.toString();
    minNumber += minDigit.toString();
  }
  return parseInt(maxNumber) - parseInt(minNumber);
}
const inputNumber = 909;
const difference = findMinMaxDifference(inputNumber);
console.log(difference);