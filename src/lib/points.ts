// Base scoring (groups + knockout):
//   Exact score match: 5 points
//   Correct result (win/draw/loss): 3 points
//   Correct goal difference: 1 bonus point
//   Wrong: 0 points
//
// Knockout bonus:
//   Correct match winner (including penalties): +2 points

export function calculatePoints(
  predHome: number,
  predAway: number,
  actualHome: number,
  actualAway: number,
  isKnockout: boolean = false,
  predPenaltyWinner?: string | null,
  actualPenaltyWinner?: string | null,
): number {
  // Base points
  let points = 0;

  if (predHome === actualHome && predAway === actualAway) {
    points = 5;
  } else {
    const predResult = Math.sign(predHome - predAway);
    const actualResult = Math.sign(actualHome - actualAway);
    if (predResult === actualResult) points += 3;
    if (predHome - predAway === actualHome - actualAway) points += 1;
  }

  // Knockout bonus: +2 for correct match winner
  if (isKnockout) {
    const predWinner =
      predHome > predAway ? "home" : predAway > predHome ? "away" : predPenaltyWinner;
    const actualWinner =
      actualHome > actualAway ? "home" : actualAway > actualHome ? "away" : actualPenaltyWinner;

    if (predWinner && actualWinner && predWinner === actualWinner) {
      points += 2;
    }
  }

  return points;
}
