/*
Creator: Ben Rawner
group of problems from memoization chapter
Also various questions from hacker rank
with examples and solutions
first exmample findding pairs
Second question for review
and preparation

*/

// function countTriplets(arr, r) {
//     let count = 0;
//     const map = {};
//     const doubles = {};
//     for (let i = arr.length - 1; i >= 0; i--) {
//         console.log(count,map,doubles);

//         let x = arr[i];
//         let rx = x * r;
//         let r2x = rx * r;
//         let pairWeWant = [rx, r2x];
//         console.log(x,pairWeWant)
//         if (doubles[pairWeWant] !== undefined) {
//             console.log(doubles[pairWeWant])
//             count = count + doubles[pairWeWant]
//         }
//         let doub = [x, rx];
//         if (doubles[doub] == undefined) doubles[doub] = 0;
//         console.log(doub)
//         doubles[doub] = doubles[doub] + ((map[rx] == undefined) ? 0 : map[rx]);
//         // Add x to map
//         (map[x] == undefined) ? map[x] = 1: map[x]++;
//         console.log(arr[i],count,map,doubles)
//         console.log("-----");
//     }
//     return count;
//     }

// // console.log(countTriplets(new Array(100).fill(1),1));
// // console.log(countTriplets([1,5,5,25,125],5));
// console.log(countTriplets([1,6,7,5,125],4));
// console.log(countTriplets([1,2,1,2,4],2));
// 0 1 1 2 3 5 8 13 21 39
// 0 1 1 2 3 5 8 13 21 39

// const memoFib = (n, memo={}) => {
//     // if (n <= 0) return 0;
//     if (n <= 2) return 1; 
//     // if (n in memo) return memo[n];
//     // memo[n] = memoFib(n-1,memo) + memoFib(n-2,memo)
//     // return memo[n];

//     return memo[n]? memo[n] : memo[n] = memoFib(n-1,memo) + memoFib(n-2,memo);
// }


// console.log(memoFib(1));
// console.log(memoFib(2));
// console.log(memoFib(3));
// console.log(memoFib(4));
// console.log(memoFib(5));
// console.log(memoFib(6));
// console.log(memoFib(7));
// console.log(memoFib(50));
// console.log(memoFib(100));
// console.log(memoFib(1000));
//3,3 -> 6
// const memoGrid = (n,m,memo={"1,1":1}) => {
//     let key = n+","+m;
//     let key2 = m+","+n;
//     if(key in memo) return memo[key];
//     if(n === 0 || m === 0) return 0;
//     memo[key] = memoGrid(n-1,m,memo) + memoGrid(n,m-1,memo);
//     memo[key2] = memo[key];
//     return memo[key];

// }

/*

                                                                                                                3,3
                                            2,3                                                         3,2=3
                            1,3 = 1                        2,2 = 2                         2,2=2               3,1=1
                        0,3 = 0    1,2  = 1               1,2=1         2,1=1                              2,1=1        3,0=0
                            0,2=0    1,1 =1         0,2=0   1,1=1   1,1 =1    2,0=0


*/

// console.log(memoGrid(1,1));
// console.log(memoGrid(2,3));
// console.log(memoGrid(3,2));
// console.log(memoGrid(3,3));
// console.log(memoGrid(4,3));
// console.log(memoGrid(4,4));
// console.log(memoGrid(5,1));
// console.log(memoGrid(7,3));
// console.log(memoGrid(6,3));
// console.log(memoGrid(8,2));
// console.log(memoGrid(9,4));
// console.log(memoGrid(12,44));

// const cansum = (num,arr,memo={})=>{
//     // console.log(num);
//     if (num in memo) return memo[num];
//     if (num === 0) return true;
//     if (num < 0) return false;
//     for (let i of arr) {
//         const remainder = num - i;
//         if(cansum(remainder, arr, memo) === true) {
//             memo[num]=true;
//             return true
//         };
//     }
//     memo[num]=false;
//     return false;
// }

// console.log(cansum(7,[2,3]));
// console.log(cansum(7,[5,3,4,7]));
// console.log(cansum(7,[2,4]));
// console.log(cansum(8,[2,3,5]));
// console.log(cansum(10,[7,14]));

// const howSum = (target,numbers, memo={})=>{
//     if(target in memo) return memo[target];
//     if(target === 0) return [];
//     if(target < 0) return null;

//     for(let num of numbers){
//         const remainder = target-num;
//         const remainderResult = howSum(remainder,numbers,memo)
//         if(remainderResult !== null) {
//             memo[target] = [...remainderResult,num];
//             return memo[target];
//         }
//     }
//     memo[target] = null;
//     return null;

// }

// console.log(howSum(7,[2,3]));
// console.log(howSum(7,[5,3,4]));
// console.log(howSum(7,[2,4]));
// console.log(howSum(8,[2,3,5]));
// console.log(howSum(300,[7,14]));
// console.log(howSum(200,[4,15]));
// console.log(howSum(100,[2,7]));

const bestSum = (targetNum,numbers,memo={})=>{
    if(targetNum in memo) return memo[targetNum];
    if(targetNum === 0) return [];
    if(targetNum < 0) return null;
    let currentShortest = null;
    for(let num of numbers){
        let remainder = targetNum - num;
        let remainderResult = bestSum(remainder,numbers,memo);
        if(remainderResult !== null){
            const combination = [...remainderResult,num];
            if(!currentShortest || currentShortest.length > combination.length) currentShortest = combination
        }
    }
    memo[targetNum]=currentShortest;
    return currentShortest;
}

console.log(bestSum(7,[2,3]));
console.log(bestSum(7,[1,8]));
console.log(bestSum(7,[5,3,4,7]));
console.log(bestSum(8,[2,3,5]));
console.log(bestSum(10,[2,3,5]));
console.log(bestSum(10,[2,3,5]));
console.log(bestSum(8,[1,4,5]));
console.log(bestSum(8,[1,6,8]));
console.log(bestSum(100,[1,2,5,25]));







