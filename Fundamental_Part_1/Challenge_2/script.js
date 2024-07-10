let marksWeight = 78;
let marksHeight = 1.69;
let johnsWeight = 92;
let johnsHeight = 1.95;

let marksBMI = marksWeight / marksHeight ** 2;
let johnsBMI = johnsWeight / johnsHeight ** 2;

console.log("BMI of Mark: " + marksBMI);
console.log("BMI of John: " + johnsBMI);

let markHigherBMI = marksBMI > johnsBMI
//Task-1
if(marksBMI > johnsBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

//Task-2
if(marksBMI > johnsBMI) {
    console.log("Mark's BMI " + marksBMI + " is higher than John's " + johnsBMI + "!");
} else {
    console.log("John's BMI " + johnsBMI + " is higher than Mark's " + marksBMI +"!");
}