
function objectElement(a, b, c){
    const object = a;
    const key = b;
    const value = c;

    a = {
    }

    a[b] = c;

    return a;
}

console.log(objectElement('armario', 'cabide', 'camisa'));