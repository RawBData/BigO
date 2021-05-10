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

//Create a function that reverses an integer 2^31 x -1*2^31 - 1 bounds

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
