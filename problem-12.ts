

function gcd(a: number, b: number): number {
  if (b === 0) {
      return a;
  }
  return gcd(b, a % b);
}
function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}
function getTotalX(a: number[], b: number[]): number {
   const lcm_a = a.reduce(lcm);
  const gcd_b = b.reduce(gcd);

  let count = 0;
  for (let i = lcm_a, j = 2; i <= gcd_b; i = lcm_a * j, j++) {
      if (gcd_b % i === 0) {
          count++;
      }
  }
  
  return count;
}

//첫 번째 배열의 요소가 고려 중인 정수의 약수입니다.
//고려 중인 정수가 두 번째 배열의 모든 요소의 약수입니다.

const a = [2, 4];
const b = [16, 32, 96];
console.log(getTotalX(a, b)); 