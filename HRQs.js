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

rl.question("What is the first string? ", function(s) {
    rl.question("what is the second string? ", function(n) {
        // console.log(repeatedString(s, n))
        //console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])) //should return 3
        // checkMagazine(["happy","times","here","there"],["happy","times","here","there","there","bear"])//should false
        console.log(twoStrings(s, n))
        //console.log(twoSum(s, n));
        //Array rotation
        //console.log(rotLeft(s, n));

        
        
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
    //ex: 'afgz ple $'
    //ex: ''
    //ex: 'abab'
     //ex: 'abab'

    let count=0;
            let extraLettersCount = 0;
            let numExtraLetters = (n%s.length);
            for(let i=0;i<s.length;i++){
                let letter = s[i];
                // console.log(letter);
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
        // console.log(i);
        // console.log(i);

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
    //create the empty notehash
    //create the empty notehash
    //and then load hash with letters
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


//Given two strings find if there are any substrings. even one letter is considered a substring
//this is a true/false yes/no scenario so by taking the first word and loading each letter (o(n) time to iterate over the word) into a hash table and then checking
//the second word letter by letter to see if it exists in the hash table (0(n) time in worst case scenario to iterate and o(1) time to look up in hash)
function twoStrings(s1, s2) {
    //given two strings 
    //do they share a common substring 
    //ex 1: "cat" and "alf" share "a" so yes
    //ex: 2: "boy" and "cat" do not share any substrings so "no"
    console.log("In twoStrings")
    let lettersHash = {};
    for(let i = 0; i < s1.length; i++){
        let s1Letter = s1[i];
        if (!lettersHash[s1Letter]) lettersHash[s1Letter] = 1;
    }

    for(let j = 0; j < s2.length; j++){
            let s2Letter = s2[j];
            if (lettersHash[s2Letter]) return "YES"
    }

    return "NO";
}


//Two Sum
//Find all the positions where the two numbers in array add up to the same value
function twoSum(s1, s2) {
    
    //currently boiler plate code until i solve on HR and then I will move here.
    return "YES";
}

//Left Rotation
function rotLeft(a, d) {
    //Ex [1,2,3,4,5] 3 -> [4,5,1,2,3]

    return a.slice(d).concat(a.slice(0,d))

}

function minimumBribes(q) {
    //only bribe person in front of you 1 being the highest
    //can only bribe 2 people
    //if index >= -1 or  of place in line === not moved
    //if index == -2 of place in line === moved once
    //if index == -3 of place in line === moved twice
    //if index <= -4 of place in line == too chaotic

    //ex: 1,2,5,3,7,8,6,4 -> 7
    //ex: 1,2,5,3,7,8,6,4 -> 7
    //ex: 1,2,5,3,7,8,6,4 -> 7
    /*
    12345678 -> 1,2,3,4,5,6,7,8->1,2,3,5,4,6,7,8(1)->1,2,5,3,4,6,7,8(2)->
                1,2,5,3,6,4,7,8(3)->12536748(4)->12537648(5)->12537684(6)->
                12537865(7)
    
                offset would effect everything else -1


                CURRENTLY SUBOPTIMAL
    
    
    let count = 0;

    for (let i = 0; i < q.length; i++){
        let lineAssignment = q[i];
        let lineAssignmentDifference = i - lineAssignment;

        if(lineAssignmentDifference <= -4){
            return "Too chaotic"
        }else if(lineAssignmentDifference === -3){
            count+=2;
        }else if(lineAssignmentDifference === -2){
            count+=1;
        }
    }

    return "test";
}

*/

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    console.log("test")

}

/*

1 3 5 2 4 6 7 -> 3

Given array  4,3,1,2
After 0,2 swapping  we get  1,3,4,2
After swapping 1,2  we get  1432
After swapping  1,3 we get  [1,2,3,4]
So, we need a minimum of 3 swaps to sort the array in ascending order.
*/

 console.log(minimumSwaps([4,3,1,2]));


 /*
 t's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by  from  at the front of the line to  at the back.
Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if and  bribes , the queue will look like this: .
Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!
Function Description
Complete the function minimumBribes in the editor below. It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.

2
5
2 1 5 3 4
5
2 5 1 3 4
====
3
Too Choatic


'use strict';

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

// Complete the minimumBribes function below.
function minimumBribes(q) {
    //only bribe person in front of you 1 being the highest
    //can only bribe 2 people
    //if index >= -1 or  of place in line === not moved
    //if index == -2 of place in line === moved once
    //if index == -3 of place in line === moved twice
    //if index <= -4 of place in line == too chaotic
    //if index moved everything will be offset by that - number
    //if index moved everything will be offset by that - number
    //if index moved everything will be offset by that - number
    let count = 0;

    for (let i = 0; i < q.length; i++){

        let lineAssignment = q[i];
        //set initial move count to zero for this element before checking
        let moveCount = 0;
        let j = i+1;

        while(q[j]){
            if(q[i] > q[j]) moveCount +=1;
            if(moveCount > 2){
                console.log ("Too chaotic");
                return
            }
            j++;
        }
        count+=moveCount;
    }

    console.log(count);
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}

 */

 function test(){
     let x=true;
     while(x){
          x = false;
     }
 }