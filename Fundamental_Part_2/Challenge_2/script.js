const calcTip = function(total) {
    let sum = total>=50 && total <=300 ? total * 0.15 : total * 0.2;
    return sum;
}

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
console.log(bills, tips, totals);