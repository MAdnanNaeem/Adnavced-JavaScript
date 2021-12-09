/* let teamDolpinScore = 96 + 108 + 89;
let teamKoalasScore = 88 + 91 + 110;
 */
// Bonus Data 1
/* let teamDolpinScore = 97 + 112 + 101;
let teamKoalasScore = 109 + 95 + 123; */

// Bonus Data 2
let teamDolpinScore = 97 + 112 + 101;
let teamKoalasScore = 109 + 95 + 106;


const avgTeamDolpinScore = teamDolpinScore / 3;
const avgTeamKoalasScore = teamKoalasScore / 3;

if ( (avgTeamDolpinScore > avgTeamKoalasScore) && (avgTeamDolpinScore >= 100) ) {
  console.log(`Team Dolphin (${avgTeamDolpinScore}) has Highest Average Score than Team Koalas(${avgTeamKoalasScore}) !! Dolphin Won the Trophy`);
} else if ( (avgTeamDolpinScore < avgTeamKoalasScore) && (avgTeamKoalasScore >= 100)) {
  console.log(`Team Koalas (${avgTeamKoalasScore}) has Highest Average Score than Team Dolphin(${avgTeamDolpinScore}) !! Koalas Won the Trophy`);
} else if ( ( (avgTeamDolpinScore && avgTeamKoalasScore) < 100 ) && (avgTeamKoalasScore !== avgTeamDolpinScore) ) {
  console.log(`Team Dolphin (${avgTeamDolpinScore}) and Team Koalas(${avgTeamKoalasScore}) !! No team has won the Trophy `);
}else if ( (avgTeamKoalasScore === avgTeamDolpinScore) && (avgTeamDolpinScore >= 100 ) && (avgTeamKoalasScore >= 100) ) {
  console.log(`Team Dolphin (${avgTeamDolpinScore}) and Team Koalas(${avgTeamKoalasScore}) !! Draw `);
}