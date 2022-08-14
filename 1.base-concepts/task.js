"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  let d = (b ** 2) - (4 * a * c);
  if (d < 0) {
    arr.push();
  } else if (d == 0) {
    let root = -b / (2 * a);
    arr.push(root);
  } else if (d > 0) {
    let rootOne = (-b + Math.sqrt(d)) / (2 * a);
    let rootTwo = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(rootOne, rootTwo);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  if (isNaN(percent)) {
    return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution)) {
    return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  let S = amount - contribution;
  let dateNow = new Date();
  let diff = Date.parse(date) - Date.parse(dateNow);
  let n = Math.ceil(diff / 1000 / 60 / 60 / 24 / 30.5);
  let P = percent / 12 / 100;
  let monthlyPay = S * (P + (P / (((1 + P) ** n) - 1)));
  totalAmount = n * monthlyPay;
  return Number(totalAmount.toFixed(2));
}
