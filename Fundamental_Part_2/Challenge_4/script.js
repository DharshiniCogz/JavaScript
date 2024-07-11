const calcTip = function(total) {
    let sum = total>=50 && total <=300 ? total * 0.15 : total * 0.2;
    return sum;
}

const calcAverage = function(total) {
    let sum = 0;
    for(let i = 0; i < total.length; i++) {
        sum = total[i] + sum;
    }
    return sum/total.length;
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
for(let i=0; i<bills.length; i++) {
    let tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

let avg = calcAverage(totals);
console.log(avg);