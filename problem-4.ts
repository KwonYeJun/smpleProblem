function diagonalDifference(arr: number[][]): number {
  // Write your code here
  let a = 0;
  let b = 0;

  for (let i = 0; i < arr.length; i++) {
      a += arr[i][i];
      b += arr[i][arr.length - 1 - i];
  }

  return Math.abs(a - b);
}

// 2차원 배열의 대각선 값을 더하여 절대 값으로 구하기