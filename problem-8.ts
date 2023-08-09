
// gpt 버전
function miniMaxSum(arr: number[]): void {
  let minSum = Infinity; 
let maxSum = -Infinity; 
let totalSum = 0; 

for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
    minSum = Math.min(minSum, arr[i]);
    maxSum = Math.max(maxSum, arr[i]);
}

const minList = totalSum - maxSum;
const maxList = totalSum - minSum;

console.log(minList, maxList);

}