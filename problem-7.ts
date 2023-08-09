function staircase(n: number): void {
  // Write your code here
  for (let i = 1; i < n + 1; i++) {
      let spaces = ' '.repeat(n - i); 
      let hashes = '#'.repeat(i); 
      console.log(spaces + hashes);
  }

}
console.log(staircase(6));