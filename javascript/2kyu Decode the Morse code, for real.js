//https://www.codewars.com/kata/54acd76f7207c6a2880012bb/train/javascript
//https://en.wikipedia.org/wiki/K-means_clustering

MORSE_CODE=
{ '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '.-.-.-': '.',
  '--..--': ',',
  '..--..': '?',
  '.----.': '\'',
  '-.-.--': '!',
  '-..-.': '/',
  '-.--.': '(',
  '-.--.-': ')',
  '.-...': '&',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '.-.-.': '+',
  '-....-': '-',
  '..--.-': '_',
  '.-..-.': '"',
  '...-..-': '$',
  '.--.-.': '@',
  '...---...': 'SOS' }

const decodeBits = bits => {
  bits=bits.replace(/^0*|0*$/g,'');//удаляем начальные и конечные ноли
  tik=bits.match(/1+|0+/g).sort((a,b)=>a.length-b.length)[0].length; //рассчитываем длину тика по наииеншей последовательности нолей или единиц
  console.log(bits);
  r=bits.match(/1+|0+/g).sort((a,b)=>a.length-b.length);
  console.log(r);
  const one = new RegExp('1'.repeat(tik), "g");
  const zero = new RegExp('0'.repeat(tik), "g");
  bits=bits.replace(one,'1').replace(zero,'0');//уменьшаем на тик длину всей последовательности единиц и нолей
  return bits.replace(/111/g, '-').replace(/0{7}/g, '   ').replace(/000/g, ' ').replace(/1/g, '.').replace(/0/g, '');
}   

const decodeMorse = morseCode => morseCode.replace(/\S+/g, v=>MORSE_CODE[v]).replace(/(?<!\s)\s|\s(?!\s)/g, '');

test='0000000011011010011100000110000001111110100111110011111100000000000111011111111011111011111000000101100011111100000111110011101100000100000';
//101010100010001110101110111 0000000 1011101110111000101011100011101010001
//.... . -.--   .--- ..- -.. .
console.log(decodeBits(test));
console.log(decodeMorse(decodeBits(test)));//HEY JUDE

