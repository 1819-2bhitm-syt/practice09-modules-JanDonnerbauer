const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('compressed.txt'),
    crlfDelay: Infinity
});

let compressedLines = [];

rl.on('line', (line) => {
    compressedLines.push(line);
});

rl.on('close', () => {
    /*for(let i = 0; i < compressedLines.length; i++) {
        console.log(decompress(compressedLines[i]));
    }*/
    for (line of compressedLines){
        console.log(decompress(line));
    }
});

function decompress(line) {
    let letter = line.charAt(0);
    let letterRow = "";
    for(let i = 0; i < parseInt(line.substring(1, line.length)); i++) {
        letterRow += letter;
    }

    return letterRow;
}