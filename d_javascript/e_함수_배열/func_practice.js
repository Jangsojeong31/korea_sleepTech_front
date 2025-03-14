function calculatePay(hours, rate) {
  if (hours > 160) {
    return 160 * rate + (hours - 160)*rate*1.5;
  }else{
    return hours * rate;
  }
}

let A = calculatePay(172, 20);
let B = calculatePay(160, 22);
let C = calculatePay(180, 18);
console.log(`$${A}`);

