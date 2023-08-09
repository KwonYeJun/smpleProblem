function climbingLeaderboard(ranked: number[], player: number[]): number[] {
  const uniqueScores = [...new Set(ranked)];
  const sortedScores = uniqueScores.sort((a, b) => b - a); // 내림차순으로 정렬된 점수 배열

  const ranks: number[] = [];
  
  for (const playerScore of player) {
      while (sortedScores.length > 0 && playerScore >= sortedScores[sortedScores.length - 1]) {
          sortedScores.pop(); // 현재 플레이어 점수보다 낮은 점수를 제거하여 더 높은 등수를 찾음
      }
      ranks.push(sortedScores.length + 1); // 현재까지의 등수를 추가
  }

  return ranks;
}

const ranked = [100, 90, 90,80, 80, 75, 60];
const player = [50, 65, 77, 90, 102,10];
const result = climbingLeaderboard(ranked, player);
console.log(result); 