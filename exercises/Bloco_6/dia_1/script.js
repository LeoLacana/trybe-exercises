const elementDate = document.getElementById('date');

function checkForms() {
    if ((elementDate.value[0] + elementDate.value[1]) > 31 || (elementDate.value[0] + elementDate.value[1]) <= 0){
        alert('Dia inválido');
    } else 
    if ((elementDate.value[3] + elementDate.value[4]) > 12 || (elementDate.value[3] + elementDate.value[4]) <= 0){
        alert('Mês inválido');
    } else 
    if ((elementDate.value[6] + elementDate.value[7] + elementDate.value[8] + elementDate.value[9]) <= 0){
        alert('Ano inválido');
    } else 
    if (elementDate.value[2] !== "/" || elementDate.value[5] !== "/"){
        alert('Formato de data inválida');
    } else
    if (elementDate.value.length < 10){
        alert('Formato de data inválida');
    }
}

const elementButton = document.getElementById('submit');
elementButton.addEventListener('click', checkForms);