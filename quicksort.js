/*
Basic Strategy:
1-Take first element and compare all other elements if they are greater or less than current element and put into greater and less than arrays
2-recursively call function on each greater or less than array until they are empty or just one
3-Bubble up solutions
4-return whole element by adding left plus current value plus right

*/

let arr = [3,2,1,5,5,9,10];

const qksrt = (unsortedArray)=>{
    //Recursive breakpoint
    if (unsortedArray.length < 2) return unsortedArray;

    //Array to move higher or lower values to pass into recursion
    let left  = [];
    let right = [];

    //Choose random index to be pivot point
    //Using the first index as the random value since it is not sorted
    let pivotVal = unsortedArray[0];
    for(let i=1;i<unsortedArray.length; i++){
        let currentVal = unsortedArray[i];
        currentVal<pivotVal? left.push(currentVal) : right.push(currentVal);
    }
    
    //left array concat pivot number and then concat right array
    return qksrt(left).concat([pivotVal]).concat(qksrt(right));
}


//Display result
console.log(qksrt(arr));