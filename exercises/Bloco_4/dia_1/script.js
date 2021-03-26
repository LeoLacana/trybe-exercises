
/* -------- Primeiro Exercício -------- */

/*const name = 'Leonardo';
const birthCity = 'Mesquita';
var birthYear = 1993;

birthYear = 2020;

console.log(birthYear);

birthCity = 'Nova Iguaçi'

console.log(birthCity);*/

/* -------- Segundo Exercício -------- */

/*var notaRafael = 70;

if (notaRafael >= 80 ){
    console.log('Parabéns, você foi aprovado(a)');
} else if (notaRafael >= 60){
    console.log('Você está na nossa lista de espera');
} else {
    console.log('Você foi reprovado');
}*/

/* -------- Terceiro Exercício -------- */

var notaRafael = 'nada';

switch (notaRafael){
    case 'aprovada':
        console.log('Parabéns, você foi aprovado(a)');
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera');
        break;
    case 'reprovado':
        console.log('Você foi reprovado');
        break;
    default:
        console.log('não se aplica');
}