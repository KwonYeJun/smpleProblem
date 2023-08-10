// 암호화 문제

function encryption(s: string): string {

  const sanitizedString = s.replace(/\s/g, "");

  const rows = Math.floor(Math.sqrt(sanitizedString.length));
  const cols = Math.ceil(Math.sqrt(sanitizedString.length));

  const grid: string[] = [];
  for (let i = 0; i < sanitizedString.length; i += cols) {
      grid.push(sanitizedString.slice(i, i + cols));
  }

  const encryptedMessage: string[] = [];
  for (let i = 0; i < cols; i++) {
      const encryptedColumn: string[] = [];
      for (const row of grid) {
          encryptedColumn.push(row[i] || ""); 
      }
      encryptedMessage.push(encryptedColumn.join(""));
  }

  return encryptedMessage.join(" ");
}

const inputString: string = "this is ju_ni.5";
const encryptedResult: string = encryption(inputString);
console.log(encryptedResult);
