'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    //is the repeating string
    //is the length of that repeated string
    //find number of occurences of 'a'

    //ex: 'abcdefg'
    //ex: 'aaaaaaefg'
    //ex: 'abcaefg'
    //ex: 'a'
    //ex: ''

    let count=0;
    let extraLettersCount =0;
    let numExtraLetters = (n%s.length);
    for(let i=0;i<s.length;i++){
        let letter = s[i];
        console.log(s);
        if(letter==='a'){
            count += 1;
            if(i<numExtraLetters){
                extraLettersCount+=1;
            }
        }
    }

    
    let allCount = Math.floor(count*(n/s.length))+extraLettersCount;
    return allCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
