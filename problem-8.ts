
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

miniMaxSum([1,2,3,4,5,])

// 내가 생각한 버전
// function miniMaxSum(arr: number[]): void {
//   // Write your code here
//   let minList = 0;
//   let maxList = 0;

//   for (let i = 0; i < arr.length; i++) {
//       if (i < arr.length - 1) {
//           minList += arr[i];
//       }
//       if (0 < i) {
//           maxList += arr[i];
//       }
//   }


//   console.log(minList, maxList)

// }
