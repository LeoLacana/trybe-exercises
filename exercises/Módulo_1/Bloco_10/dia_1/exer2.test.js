const { test, expect } = require('@jest/globals');
const encode = require('./exer2');
const decode = require('./exer2');

describe('Testes nas funções encode e decode', () => {
    it('Testar se a função encode é uma função', () => {
        expect('function').toEqual(typeof (encode));
    });
    
    it('Testar se a função decode é uma função', () => {
        expect('function').toEqual(typeof (decode));
    })

    it('Testar se a função encode troca as vogais a, e, i, o, u por 1, 2, 3, 4, 5', () => {
        expect('12345').toBe(encode('aeiou'));
    });

    it('Te', () => {
        expect('12345').toBe(decode('aeiou'));
    });
});