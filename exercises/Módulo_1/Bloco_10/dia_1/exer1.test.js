const { test, expect } = require('@jest/globals');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

test('A função sum com os parâmetros 4 e 5 retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
});

test('A função sum com os parâmetros 0 e 0 retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
});

test('Se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => { 
        sum(4, '5') 
    }).toThrowError('parameters must be numbers');
});