function plusMinus(arr: number[]): void {
  // Write your code here
  let max = 0;
  let min = 0;
  let zero = 0;

  arr.forEach((x) => {
    if (x > 0) {
      max += 1;
    } else if (x < 0) {
      min += 1;
    } else {
      zero += 1;
    }
  })
  console.log(max / arr.length);
  console.log(min / arr.length);
  console.log(zero / arr.length);
}
// 양수 음수 0 갯수를 카운트 하여 배열 length만큼 나누어서 값을 출력 한다.