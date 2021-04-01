/*

Part 1: Say that I gave you an array of length n, containing the numbers 1..n in jumbled order. "Sort" this array in O(n) time. You should be able to do this without looking at the input.
  Part 2: Say that I give you an array of length n with numbers in the range 1..N (N >= n). Sort this array in O(n + N) time. You may use O(N) memory.

  Part 3: Say I give you an array of n strings, each of length k. I claim that, using merge sort, you can sort this in O(knlog(n)), since comparing a pair of strings takes O(k) time
.  I want you to beat that. Sort the strings in O(kn). Hint: do not compare any two strings. You may assume all strings contain only lowercase letters a..z without whitespace or punctuation.


CQ's:
Numbers are all above zero
numebers are never duplicated
numbers are never bigger than n
if an empty array return an empty array

i/o:
[3,1,2] -> [1,2,3]
[1,3,2,5,4] -> [1,2,3,4,5]


Pseudocode:
create new array
iterated over old array
insert into new array at old array value minus one
return new array

*/


/*
[3,1,2] -> [1,2,3]

newArr = [1,2,3]
element = 2
*/
function sortingOneThroughn(oldArr){
    const newArr = [];
    for (let i = 0; i < oldArr.length; i++) {
        const element = oldArr[i];
        newArr[element-1]=element;
    }
    return newArr;
}

/*
CQ's:
Numbers are all above zero
numebers are never duplicated
numbers are never bigger than n
if an empty array return an empty array

i/o:
[3,1,10] -> [1,3,10]
[1,2,5,4,100] -> [1,2,4,5,100]


Pseudocode:
create new array and 
create new return array
iterated over old array
insert into new array at old array value
iterate over the new array and only return 
non null/undefined values

*/


/*
[1,2,5,4,7] -> [1,2,4,5,7]

newArr = [undefined,1,2,undefined,4,5,undefined,7] -> [1,2,4,5,7]
element = 7
*/
function sortingOneThroughN(oldArr){
    const newArr = [];
    for (let i = 0; i < oldArr.length; i++) {
        const element = oldArr[i];
        newArr[element]=element;
    }
    newArr = newArr.filter(ele=>(ele))
    return newArr;
}

/*
CQ's:
All strings are the same length
if an empty array return an empty array

i/o:
[the,thy,hit,him,her] -> [her,him,hit,the,thy]
[he,hi,it,is] -> [he,hi,is,it]


Pseudocode:
This is where i can write the code in not specific detail

*/