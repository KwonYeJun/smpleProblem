
function birthdayCakeCandles(candles: number[]): number {


  const maxCandleHeight = Math.max(...candles);

  let tallestCandlesCount = 0;
  for (const height of candles) {
      if (height === maxCandleHeight) {
          tallestCandlesCount++;
      }
  }

  return tallestCandlesCount;
}