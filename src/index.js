const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const DOT_DASH = {
    '10': '.',
    '11': '-'
}

function decode(expr) {
    // write your solution here
    let charArr = expr.match(/.{10}/g);

    const charDecoder = char => {
        if(char === '**********') {
            return ' ';
        }
        let dotDashArr = char.match(/\d{2}/g).filter(item => item !== '00');
        let morzeChar = dotDashArr.map(char => DOT_DASH[char]);
        return MORSE_TABLE[morzeChar.join('')]
    }

    return charArr.map(char => charDecoder(char)).join('');
}

module.exports = {
    decode
}