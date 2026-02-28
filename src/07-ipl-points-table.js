/**
 * 🏆 IPL Season Points Table
 *
 * IPL ka season chal raha hai aur tujhe points table banana hai!
 * Tujhe match results ka array milega, aur tujhe har team ke points
 * calculate karke sorted table return karna hai.
 *
 * Match result types:
 *   - "win": Winning team gets 2 points, losing team gets 0
 *   - "tie": Both teams get 1 point each
 *   - "no_result": Both teams get 1 point each (rain/bad light)
 *
 * Each match object: { team1: "CSK", team2: "MI", result: "win", winner: "CSK" }
 *   - For "tie" and "no_result", the winner field is absent or ignored
 *
 * Rules (use for loop with object accumulator):
 *   - Loop through matches array
 *   - Build an object accumulator: { "CSK": { team, played, won, lost, tied, noResult, points }, ... }
 *   - After processing all matches, convert to array and sort:
 *     1. By points DESCENDING
 *     2. If points are equal, by team name ASCENDING (alphabetical)
 *
 * Validation:
 *   - Agar matches array nahi hai ya empty hai, return []
 *
 * @param {Array<{team1: string, team2: string, result: string, winner?: string}>} matches
 * @returns {Array<{team: string, played: number, won: number, lost: number, tied: number, noResult: number, points: number}>}
 *
 * @example
//  *   iplPointsTable([
//  *     { team1: "CSK", team2: "MI", result: "win", winner: "CSK" },
//  *     { team1: "RCB", team2: "CSK", result: "tie" },
//  *   ])
//  *   // CSK: played=2, won=1, tied=1, points=3
//  *   // MI: played=1, won=0, lost=1, points=0
//  *   // RCB: played=1, tied=1, points=1
//  *   // Sorted: CSK(3), RCB(1), MI(0)
 */
export function iplPointsTable(matches) {
  // Your code here
  if (!Array.isArray(matches) || matches.length == 0 || matches == null) {
    return [];
  }
  const table = {}

  for (let i of matches) {
    if (!Object.hasOwn(table, i.team1)) {
      table[i.team1] = {
        team: i.team1,
        played: 0,
        won: 0,
        lost: 0,
        tied: 0,
        noResult: 0,
        points: 0
      }
    }
    if (!Object.hasOwn(table, i.team2)) {
      table[i.team2] = {
        team: i.team2,
        played: 0,
        won: 0,
        lost: 0,
        tied: 0,
        noResult: 0,
        points: 0
      }
    }

    if(i.result==="win"){
      const winner = i.winner
      const loser = winner === i.team1 ? i.team2 : i.team1
     table[winner].won += 1
      table[winner].points += 2

      table[loser].lost += 1

      table[winner].played += 1
      table[loser].played += 1

  }

    if(i.result === "tie"){
      // played
      table[i.team1].played+=1
      table[i.team2].played+=1
      // tied
      table[i.team1].tied+=1
      table[i.team2].tied+=1

      // points
      table[i.team1].points+=1;
      table[i.team2].points+=1;

    }
     if(i.result=="no_result"){
      // noresult
      table[i.team1].noResult+=1
      table[i.team2].noResult+=1

      // played
      table[i.team1].played+=1
      table[i.team2].played+=1

      // points
      table[i.team1].points+=1;
      table[i.team2].points+=1;

    }
    
  }
    // return Object.values(table)
  return Object.values(table).sort((a,b)=>{
    if(b.points !== a.points){
      return b.points - a.points
    }
    return a.team.localeCompare(b.team)
  })


}