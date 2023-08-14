// 캥거루가 점프점프

function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
    if ((v1 > v2) && ((x2 - x1) % (v1 - v2) === 0)) {
      return "YES";
  } else {
      return "NO";
  }
}

// Example usage
console.log(kangaroo(0, 3, 4, 2)); // Output: "YES"
console.log(kangaroo(0, 2, 5, 3)); // Output: "NO"