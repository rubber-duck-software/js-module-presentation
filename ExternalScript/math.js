function add(num1, num2) {
  return Number(num1) + Number(num2);
}

function multiply(num1, num2) {
  let res = 0;
  for (let i = 0; i < Number(num2); i++) {
    res = add(res, num1);
  }
  return res;
}
