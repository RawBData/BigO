/*
write a fuctions that takes an n x m two dimental array that cae be square shapped when n===m and returens a one dimentaisl array of teh arrays 
elements in spiral OverconstrainedError. 
,
Spiral order starts at teh top left corner fo the two dem array goes to the right and procesin a speiral all the way until evey element has been visted.

cQ's
always a square = no;
elements dont matter
spirals inwards at top left
n and m will maintain their size


input/output
ex: 1
[
    [1,2,3,4],
    [12, 13, 14, 15],
    [11,16,15,6],
    [10, 9, 8, 7],
]

[   [1,2,3,4,5,,6,7,8,9,10,11,12,13,14,15,16]

]

ex:2
[
    [1,2,3],
    [8,9,4],
    [7,6,5]
]

[1,2,3,4,5,6,7,8,9]

psedocode
time complexity should be 0(n*m) where n is the length and m is the height of the matrix
space complexity should be 0(n*m) where n is the length and m is the height of the matrix

Pseudo:
set a variable to the length of n endN also set startN=0
set a variable to the length of m endM also set startM=0
set a variable called direction to "r" ("d",'l','u')
set a variable stillCollecting to true
use a while loop while stillCollecting is true
we will use the cardinal direction to tell us what direction we should be going in an if statement
start by iterating over the matrix by using the direction that was given starting at  startN or startM until we get to the variable length of n or m
when finished with direction change next logical



*/

const spiral = (matrx) =>{
    let newArr = [];
    matrixSize = matrx.length * matrx[0].length;
    let endN = matrx.length;
    let endM = matrx[0].length;
    let startN = 0;
    let startM = 0;
    let direction = 'r';

    while(newArr.length >= matrixSize){
        switch (direction) {
            case 'r':
                for (let i = startM; i < endM; i++) {
                    const ele = matrx[startN][i];
                    newArr.push(ele);
                }
                startN+=1;
                direction = 'd';
            break;

            case 'd':
                for (let i = startN; i < endN; i++) {
                    const ele = matrx[i][endM]; 
                    newArr.push(ele);                  
                }
                endM-=1;
                direction = 'l';

            break;
            
            case 'l':
                for (let i = endM-1; i >= startM; i--) {
                    const ele = matrx[endN][i];
                    newArr.push(ele);                  
                }
                endN-=1;
                direction = 'u';

            break;
            
            case 'u':
                for (let i = endN-1; i >= startN; i--) {
                    const ele = matrx[i][startM];
                    newArr.push(ele);                  
                }
                startM+=1;
                direction = 'r';
            break;


            default:
                break;
        }

    }

    return newArr;
}

