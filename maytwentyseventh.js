/*
There are n soldiers standing in a line. Each soldier is assigned a unique rating value. 
You have to form a team of 3 soldiers amongst them under the following rules: 

Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).

A team is valid if:  
(rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).

Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams and position matters).

Example 1:Input: 
rating = [2,5,3,4,1]
Output: 3

Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1). 
Example 2: 

Input: rating = [2,1,3]
Output: 0
Explanation: We can't form any team given the conditions.

Example 3:
Input: rating = [1,2,3,4]


CQs
arr length < 3 return Never will happen
ijk will never equal each other
All numbers are unique

pseudo:
set up three pointers to i j and k
set up count
iterated over array to get i
since j has to be less than or more than i only look for k's that are corresponding to that direction
once i find k that fulfillls the critera i would add one ot the count

Output: 4


Example 1:Input: 
rating = [2,5,3,4,1]
ratingI=4
ratingJ=1
ratingK=1
count=3
output->3

*/

function soldiers1(arr){
    let count  = 0;
    //Double loop not as efficient
    for (let i = 0; i < array.length; i++) {
        const ratingI = array[i];
        if (i+2>=array.length) break;
        for (let j = i+1; j < array.length; j++) {
            if (j+1>=array.length) break;
            const ratingJ = array[j];
                for (let k = j+1; k < array.length; k++) {
                    const ratingK = array[k];
                    if(ratingI>ratingJ){
                        if(ratingJ>ratingK) count++;
                    }else{
                        if(ratingJ<ratingK) count++;
                    }
                }   
    }

    return count;

}
//Changing arrays to move to correct positions and return nothing because the array is mutable
//start at 1
function soldiers2(arr){
    for (let j = 1; j < array.length-1; j++) {
        const ratingI = array[j-1];
        const ratingJ = array[j];
        const ratingK = array[j+1];
    }
}