  function encode(phraseEncode) {
    let arrayEncode = [];
    let phraseEncodada = '';
    for (let index1 = 0; index1 < phraseEncode.length; index1 += 1) {
      arrayEncode.push(phraseEncode[index1]);
    }
  
    for (let index2 = 0; index2 < phraseEncode.length; index2 += 1) {
      switch (phraseEncode[index2]) {
      case 'a':
        arrayEncode[index2] = 1;
        break;
      case 'e':
        arrayEncode[index2] = 2;
        break;
      case 'i':
        arrayEncode[index2] = 3;
        break;
      case 'o':
        arrayEncode[index2] = 4;
        break;
      case 'u':
        arrayEncode[index2] = 5;
        break;
      default:
        break;
      }
    }
  
    for (let index3 = 0; index3 < arrayEncode.length; index3 += 1) {
      phraseEncodada += arrayEncode[index3];
    }
  
    phraseEncode = phraseEncodada;
  
    return phraseEncode;
  }

  function decode(phraseDecode) {
    let arrayDecode = [];
    let phraseDecodada = '';
    for (let index1 = 0; index1 < phraseDecode.length; index1 += 1) {
      arrayDecode.push(phraseDecode[index1]);
    }
  }

  //console.log(encode('aeiou'));

  module.exports = encode, decode;
