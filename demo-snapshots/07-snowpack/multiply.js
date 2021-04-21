import { add } from './add.js';
import isNumber from 'is-number';

export function multiply(num1, num2) {
  if (!isNumber(num1) || !isNumber(num2)) {
    return 400;
  }
  let res = 0;
  for (let i = 0; i < Number(num2); i++) {
    res = add(res, num1);
  }
  return res;
}
