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
        // console.log(repeatedString(s, n))
        //console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])) //should return 3
        checkMagazine(["happy","times","here","there"],["happy","times","here","there","there","bear"])//should false
        checkMagazine(["happy","times","here","there"],["happy","here","there"]) //should true
        checkMagazine(["happy","times","here","there","there"],["happy","here","there"]) //should true
        
        // console.log(`${name}, is a citizen of ${country}`);

        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});


//abaabaabaab -> 7
            //input: epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq
            //input: 549382313570
            //16481469408

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
            let extraLettersCount = 0;
            let numExtraLetters = (n%s.length);
            for(let i=0;i<s.length;i++){
                let letter = s[i];
                console.log(letter);
                if(letter==='a'){
                    count += 1;
                    if(i<numExtraLetters){
                        extraLettersCount+=1;
                    }
                }
            }
    console.log(count*Math.floor((n/s.length)),count,extraLettersCount)
    let allCount = count*Math.floor(n/s.length)+extraLettersCount;
    return allCount;
}

function jumpingOnClouds(c) {
    //we know we can jump all bad clounds which shrinks n by 1
    //we know we can jump regular clouds which shrinks n by 1
    //we should check next cloud if it is bad if not we should check next next cloud if it is bad
    //
    let count = 0;
    for(let i = 0; i < c.length-1; i++){
        let currentCloud = c[i];
        let nextCloud = c[i+1];
        let nextNextCloud = c[i+2];
        console.log(i);

        if (nextCloud === 1){
            count+=1;
            i++
            continue;
        }

        if (nextNextCloud !== 1){
            count+=1
            i++;
            continue;
        }
        
        count+=1;

    }
    return count;

}

//Find optimized way to check of every item from one array is in another
function checkMagazine(magazine, note) {

    let noteHash = {};

    let noteArr = note;
    for(let i=0;i<noteArr.length;i++){
        if(!noteHash[noteArr[i]]){
            noteHash[noteArr[i]] = 1;
        }else{
            noteHash[noteArr[i]] += 1;
        }
    }

    let magArr = magazine;
    for(let i=0;i<magArr.length;i++){
        if(noteHash[magArr[i]]>0){
            noteHash[magArr[i]] -= 1;
        }
    }

    console.log(Object.values(noteHash).every( x => x === 0)?"Yes":"No")
}
