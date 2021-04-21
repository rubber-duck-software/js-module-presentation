import { add } from './add.js';

export function multiply(num1, num2) {
  let res = 0;
  for (let i = 0; i < Number(num2); i++) {
    res = add(res, num1);
  }
  return res;
}
