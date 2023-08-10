// 암호화 문제

function encryption(s: string): string {
  // 공백 제거
  const sanitizedString = s.replace(/\s/g, "");

  // 그리드의 행과 열 계산
  const rows = Math.floor(Math.sqrt(sanitizedString.length));
  const cols = Math.ceil(Math.sqrt(sanitizedString.length));

  // 그리드 만들기
  const grid: string[] = [];
  for (let i = 0; i < sanitizedString.length; i += cols) {
      grid.push(sanitizedString.slice(i, i + cols));
  }

  // 그리드의 열을 따라 읽어서 암호화된 메시지 생성
  const encryptedMessage: string[] = [];
  for (let i = 0; i < cols; i++) {
      const encryptedColumn: string[] = [];
      for (const row of grid) {
          encryptedColumn.push(row[i] || ""); // 열이 부족한 경우 빈 문자열 추가
      }
      encryptedMessage.push(encryptedColumn.join(""));
  }

  return encryptedMessage.join(" ");
}

// 입력 문자열
const inputString: string = "haveaniceday";
const encryptedResult: string = encryption(inputString);
console.log(encryptedResult);
