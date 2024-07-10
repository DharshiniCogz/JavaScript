let scoreDolphins = 96 + 108 + 89;
let scoreKoalas = 88 + 91 + 110;

let avgDolphins = scoreDolphins / 3;
let avgKoalas = scoreKoalas / 3;

if(avgDolphins > avgKoalas) {
    console.log("Dolphins win the trophy");
} else if(avgDolphins < avgKoalas) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy")
}

//Bonus - 1
scoreDolphins = 97 + 112 + 101;
scoreKoalas = 109 + 95 + 123;

avgDolphins = scoreDolphins / 3;
avgKoalas = scoreKoalas / 3;

console.log("Dolphins average: " + avgDolphins + " and Koalas average: " + avgKoalas);

if(avgDolphins > avgKoalas && avgDolphins >=100) {
    console.log("Dolphins win the trophy");
} else if(avgDolphins < avgKoalas && avgKoalas >= 100) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy")
}

//Bonus - 2
scoreDolphins = 97 + 112 + 90;
scoreKoalas = 97 + 112 + 90;

avgDolphins = scoreDolphins / 3;
avgKoalas = scoreKoalas / 3;

console.log("Dolphins average: " + avgDolphins + " and Koalas average: " + avgKoalas);

if(avgDolphins > avgKoalas && avgDolphins >=100) {
    console.log("Dolphins win the trophy");
} else if(avgDolphins < avgKoalas && avgKoalas >= 100) {
    console.log("Koalas win the trophy");
} else if((avgDolphins == avgKoalas && avgKoalas >= 100)){
    console.log("Both win the trophy")
} else {
    console.log("No team wins the trophy");
}