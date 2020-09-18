/*
Basic Strategy:
1-Take first element and compare all other elements if they are greater or less than current element and put into greater and less than arrays
2-recursively call function on each greater or less than array until they are empty or just one
3-return whole element
*/

let arr = [3,2,1,5,5,9,10];

const qksrt = (unsortedArray)=>{
    //Recursive breakpoint
    if (unsortedArray.length < 2) return unsortedArray;

    //Array to move higher or lower values to pass into recursion
    let left  = [];
    let right = [];
    
    let pivotVal = unsortedArray[0];
    for(let i=1;i<unsortedArray.length; i++){
        let currentVal = unsortedArray[i];
        currentVal<pivotVal? left.push(currentVal) : right.push(currentVal);
    }
    
    return qksrt(left).concat([pivotVal]).concat(qksrt(right));
}

console.log(qksrt(arr));