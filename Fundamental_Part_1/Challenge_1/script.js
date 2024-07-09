//Data - 1
let marksWeight = 78;
let marksHeight = 1.69;
let johnsWeight = 92;
let johnsHeight = 1.95;

let marksBMI = marksWeight / marksHeight ** 2;
let johnsBMI = johnsWeight / johnsHeight ** 2;

console.log("BMI of Mark: " + marksBMI);
console.log("BMI of John: " + johnsBMI);

let markHigherBMI = marksBMI > johnsBMI
console.log("Mark has a higher BMI than John for Data - 1: " + markHigherBMI);

//Data - 2
marksWeight = 95;
marksHeight = 1.88;
johnsWeight = 85;
johnsHeight = 1.76;

marksBMI = marksWeight / (marksHeight * marksHeight);
johnsBMI = johnsWeight / (johnsHeight * johnsHeight);

console.log("BMI of Mark: " + marksBMI);
console.log("BMI of John: " + johnsBMI);

markHigherBMI = marksBMI > johnsBMI
console.log("Mark has a higher BMI than John for Data - 2: " + markHigherBMI);