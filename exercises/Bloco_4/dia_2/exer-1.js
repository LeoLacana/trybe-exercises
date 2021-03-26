// ------exer-1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//console.log(numbers);

// ------exer-2

/*let sumNumbers = 0;

for(let i = 0; i < numbers.length; i += 1){
    sumNumbers += numbers[i];
}

console.log(sumNumbers);*/

// ------exer-3

/*let sumNumbers = 0;
let averageNumbers = 0;

for(let i = 0; i < numbers.length; i += 1){
    sumNumbers += numbers[i];
}

averageNumbers = sumNumbers/numbers.length

console.log(averageNumbers);*/

// ------exer-4

/*let sumNumbers = 0;
let averageNumbers = 0;

for(let i = 0; i < numbers.length; i += 1){
    sumNumbers += numbers[i];
}

averageNumbers = sumNumbers/numbers.length

if (averageNumbers > 20){
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}*/

// ------exer-5

/*let hightNumber = 0;

for (let i = 0; i < numbers.length; i += 1){
    if (hightNumber < numbers[i]){
        hightNumber = numbers[i];
    }
}

console.log('O maior valor do Array é: ' + hightNumber);*/

// ------exer-6

/*let oddNumbers = 0;

for (let i = 0; i < numbers.length; i += 1){
    if((numbers[i] % 2) === 0){
        console.log(numbers[i]);
        oddNumbers += 1
    }
}

if (oddNumbers === 0){
    console.log('nenhum valor ímpar');
}*/

// ------exer-7

/*let smallNumber = numbers[0];

for (let i = 0; i < numbers.length; i += 1){
    if (smallNumber > numbers[i]){
        smallNumber = numbers[i];
    }
}

console.log('O menor valor do Array é: ' + smallNumber);*/

// ------exer-8

/*let creatArray = [];

for (let i = 1; i <= 25; i += 1){
    creatArray.push(i)
}

console.log('Array criado: [' + creatArray + ']');*/

// ------exer-9

/*let creatArray = [];

for (let i = 1; i <= 25; i += 1){
    creatArray.push(i)
    console.log(creatArray[i -1] / 2);
}*/