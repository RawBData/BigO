/* Longest String*/


// var lengthOfLongestSubstring = function(s) {
//     let longestString = "";
    
//     for(let i = 0;i<s.length;i++){
//         let newString = ""
//         for(let j = i+1;j<s.length;j++){
//             if(!newString.includes(s[j])){
//                 newString = s.slice(i,j+1);
//                 if(newString.length>longestString.length) longestString = newString;
//             }else{
//                 break;
//             }
//             console.log(longestString,newString)
//         }
//     }
//     return longestString.length;
// };

// console.log(lengthOfLongestSubstring("abcabcbb"));

/* finding median of two sorted array*/

// var findMedianSortedArrays = function(nums1, nums2) {
//     mergedArr = []
//     while(nums1.length || nums2.length){
//         if(nums1.length<1){
//             mergedArr.push(...nums2);
//             nums2 = [];
//         }else if(nums2.length<1){
//             mergedArr.push(...nums1);
//             nums1 = [];
//         }else{
//             nums1[0]<nums2[0]? mergedArr.push(nums1.shift()) : mergedArr.push(nums2.shift());
//         }   
//     }
//     return mergedArr.length%2 === 0? 
//         (mergedArr[Math.floor(mergedArr.length/2)] + mergedArr[Math.floor(mergedArr.length/2)-1])/2
//         : 
//         mergedArr[Math.floor(mergedArr.length/2)] 
// };

// console.log(findMedianSortedArrays([1,3],[2]));

//currently broken
// var longestPalindrome = function(s) {
//     let longestPal = s[0];
//     let currentWrd = "";
//     for(let i = 0;i<s.length; i++){
//         // console.log("inside i")
//         for(let j = i+1;j<s.length; j++){
//             // console.log("inside j")
//             // console.log(currentWrd, longestPal)
//             currentWrd = s.slice(i,j+1);
//             if(currentWrd === currentWrd.split("").reverse().join('') && currentWrd.length > longestPal.length){
//                 longestPal = currentWrd
//             }else if(0){

//             }
//             // console.log("currentword "+currentWrd, "longestPal "+longestPal)

//         }
//     }
//     return longestPal;
// };


// console.log(longestPalindrome("ac"));
// // console.log(longestPalindrome(
// // "kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv"
// // ));


// var convert = function(s, numRows) {
//     if(numRows < 2) return s;
//     let wordsArr = new Array(numRows).join(".").split(".");
//     let arrIndex = 0;
//     pointerGoingUp = true;
//     for(let i=0;i<s.length;i++){
//         wordsArr[arrIndex] = wordsArr[arrIndex]+s[i];
//         if(arrIndex === wordsArr.length-1 || (arrIndex === 0 && !pointerGoingUp)) pointerGoingUp = !pointerGoingUp;
//         arrIndex = pointerGoingUp? arrIndex+1 : arrIndex-1;
//     }
//     return wordsArr.join("");
// };

// console.log(convert("PAYPALISHIRING",3)); //"PAHNAPLSIIGYIR"  

/*

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
P   A   H   N
A P L S I I G
Y   I   R


Explanation:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
P     I    N
A   L S  I G
Y A   H R
P     I


4 rows = 4 words that will be added
pointer to each word and add letters and add to pointer
subtract pointer until we get to first word again and start again

create an array with empty string words with length of rows

for the word length
start with pointer at array 0 index and move until last index and move back to first index adding letter off end
add words together 

*/

//Create a function that reverses an integer 2^31 x -1*2^31 - 1 bounds for both creating and producing solution working
/* 


var reverse = function(x) {
    let multiplyer = x<0? -1 : 1;
    let reversed = parseInt((x+"").split("").reverse().join("")) * multiplyer;
    if(Math.pow(-2,31) >= reversed || reversed >= Math.pow(2,31)-1){
        reversed = 0;
    } 
    return reversed;
};

//2147483647
//9646324351
console.log(reverse(321)); //123
console.log(reverse(2147483647)); //9646324351

*/

/*
Implement the myAtoi(string s) function, 
which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
*/
var myAtoi = function(s) {
    //return parseInt(s)
    //variable to keep track of read in integer
    let currentNumber = "";
    //tracking sign variable that will be multiplyed when integer is found. set to 0 to ensure signing happens if + shows up
    let pnNumber= 0;
    let numberReadIn = false;
    let maxValue = Math.pow(2,32)-1;
    let minValue = Math.pow(2,32)*-1;
    while (s.length > 0){
        console.log(
            maxValue.toString().length,
            minValue.toString().length

        )
        let currentLetter = s[0];


        if(numberReadIn){

            if ("123456789".includes(currentLetter)){
                currentNumber = currentNumber + currentLetter
            }else{
                break;
            }
            
            if(currentNumber.length > 10){
                
            }

        }else{
            if (" 123456789+-".includes(currentLetter)){
                if(currentLetter === " "){
                    
                }else if(currentLetter === "-"){
                    pnNumber = -1;
                    numberReadIn = true;
                }else if(currentLetter === "+"){
                    pnNumber = 1;
                    numberReadIn = true;
                }else{
                    currentNumber =  currentLetter;
                    numberReadIn = true;
                }
            }else{
                break
            }
        }
        s = s.slice(1);
    }

    pnNumber = pnNumber === -1? -1 : 1;
    return pnNumber * parseInt(currentNumber) || 0;
};

/* 
Input: s = "   -42"
Output: -42
Explanation:
Step 1: "   -42" (leading whitespace is read and ignored)
            ^
Step 2: "   -42" ('-' is read, so the result should be negative)
             ^
Step 3: "   -42" ("42" is read in)
               ^
The parsed integer is -42.
Since -42 is in the range [-231, 231 - 1], the final result is -42.
*/

//Create a function finds an integer within 2^31 x -1*2^31 - 1 bounds 
// clamped to  [-2^31, 2^31 - 1], to make sure within bounds



console.log(myAtoi("321")); //123
console.log(myAtoi("54321")); //54321
console.log(myAtoi("  54321")); //54321