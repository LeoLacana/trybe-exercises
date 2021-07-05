const assert = require('assert');

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 1000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), 1500);

//assert.deepStrictEqual(numbers, [1, 2, 3]); // essa validação falha