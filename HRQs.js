/*
Below are Hack Rank Questions that I have solved

*/

/*

//the first code below is just a snippet I created to run the hacker rank questions from terminal locally.

'use strict';

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is the string? ", function(s) {
    rl.question("which letter to count? ", function(l) {
        //
        // console.log(`string = ${s}, n = ${l}`);
        console.log(someFunction(s, l));
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

function someFunction(s,n){
    console.log(s,n);
}
*/



'use strict';

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is the string? ", function(s) {
    rl.question("how many letters to count? ", function(n) {
        console.log(repeatedString(s, n)) 
        // console.log(`${name}, is a citizen of ${country}`);

        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

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
        // console.log(s);
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


