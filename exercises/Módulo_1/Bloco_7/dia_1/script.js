/*// ---------------- Exercício 1 -------------------

const testingScope = (escopo) => {
  (escopo === true) ? console.log(`Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`) :
  console.log(`Não devo ser utilizada fora meu escopo (else)`);
}
// testingScope(false);

// ---------------- Exercício 2 -------------------

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddAndEvens = () => {
  let x = oddsAndEvens.sort(function(a, b) {return a - b;}); return x;
}
//console.log(sortOddAndEvens());

//console.log(oddsAndEvens.sort((a, b) => a - b));

// ---------------- Exercício 3 -------------------*/

function factorialNumber(numberX) {
  let variavel = 1;
  for (let index = 1; index <= numberX; index += 1){
    variavel *= index;
  }
  return variavel;
}

console.log(factorialNumber(3));