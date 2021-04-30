const wakeup = () => console.log('Acordando!!');
const coffe = () => console.log('Bora tomar café!!');
const sleep = () => console.log('Partiu dormir!!');

const doingThings = (callBack) => {
    callBack();
}

doingThings(sleep);