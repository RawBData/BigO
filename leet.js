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

var findMedianSortedArrays = function(nums1, nums2) {
    mergedArr = []
    while(nums1.length || nums2.length){
        if(nums1.length<1){
            mergedArr.push(...nums2);
            nums2 = [];
        }else if(nums2.length<1){
            mergedArr.push(...nums1);
            nums1 = [];
        }else{
            nums1[0]<nums2[0]? mergedArr.push(nums1.shift()) : mergedArr.push(nums2.shift());
        }   
    }
    return mergedArr.length%2 === 0? 
        (mergedArr[Math.floor(mergedArr.length/2)] + mergedArr[Math.floor(mergedArr.length/2)-1])/2
        : 
        mergedArr[Math.floor(mergedArr.length/2)] 
};

console.log(findMedianSortedArrays([1,3],[2]));
