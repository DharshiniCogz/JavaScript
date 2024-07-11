

const checkWinner = function(avgDolphins, avgKoalas) {
    if(avgDolphins > (2*avgKoalas)) {
        return `Koalas win ${avgDolphins} vs. ${avgKoalas}`;
    } else if(avgKoalas > (2*avgDolphins)) {
        return `Dolphins win ${avgDolphins} vs. ${avgKoalas}`;
    } else {
        return "No team wins..."
    }
}

const calcAverage = function(score1, score2, score3) {
    return (score1 + score2 + score3)/3;
}

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins,scoreKoalas));

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins,scoreKoalas));