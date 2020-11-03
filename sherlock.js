

// // given an m by n matrix. Filled with non negative numbers. find the path from the top left to the bottom right where the path you take minimizes the sum of all numbers along the path. Can only move right or down

 

// //    CQs
// //    zero can be inlcude
// //    at least two numbers in array
// //    at least two sub arrays
// //    always start at zero 
// //    always end at array[n-1][m-1]

// //   ex:1
// //     [[1,3,1], 
// //      [1,5,1], 
// //      [4,2,1]]

// //    output is seven = 1,3,1,1,1

// //    ex:2
// //     [[1,0,1],
// //      [1,0,1]] -> 

// //    output is seven = 3

// //    ex:3
// //   not possible
// //    [[1,2],
// //     [3,1]]

// //   0(n*m)

// //   Pseudocode:
// //   function passes in current position and the array
// //   Start at [0][0]
// //   value at 0,0 is added to the total
// //   choose the minimum of either moving right or moving down recursively
// //   once reach base case return value

// ex:1
// //     [[1,3,1], 
// //      [1,5,1], 
// //      [4,2,1]]

// //     [[1,4,5], 
// //      [2,7,6], 
// //      [6,8,7]]

// //    output is seven = 1,3,1,1,1

// currentI = 0
// currentJ = 0
// path = 1 +min(3,1)

// currentO = 0
// currentN = 0
// currentM = 0
// currentL = 0
// currentK = 0
// currentI = 0
// currentJ = 1
// path = 3 + min(5,1)

// currentI = 1
// currentJ = 0
// path = 1 + min(5,4)

// function minPath(matr, currentI = 0,currentJ=0){
//   if((currentI === matr.length-1) && currentJ === matr[0].length-1)){
//       return matr[currentI][currentJ];
//   }
//   let path;
//   if(currentJ === matr[0].length-1){
//       path = matr[currentI][currentJ] +minPath(matr, currentI+1, currentJ)
//   }else if(currentI === matr.length-1){
//       path = matr[currentI][currentJ] +minPath(matr, currentI, currentJ+1)
//   }else{
//     path = matr[currentI][currentJ] + Math.min(minPath(matr,currentI,currentJ+1),minPath(matr,i+1,j))
//   }


//   return path;


// }

/* 
  input abba = 
  output 4 
  
  pairs {“a”, “a”}, {"b", "b"}, {“ab”, “ba”}, {“abb”, “bba”}
  pairs {“a”, “a”}, {"b", "b"}, {“ab”, “ba”}, {“abb”, “bba”}

  input azza = 
  output 4 
  
  pairs {“z”, “z”}, {"a", "a"}, {“za”, “az”}, {“zaa”, “aaz”}
  pairs {“z”, “z”}, {"a", "a"}, {“za”, “az”}, {“zaa”, “aaz”}
  Add more pairs

 */
function sherlockAndAnagrams(s) {
  console.log("-----------*-----------");
  console.log("-----------*-----------");
    let count = 0;
    let currentWord;
    for(let i=0;i<s.length;i++){
        for(let j=0;j<s.length;j++){
            if(j>=i){
            currentWord=s.slice(i,j+1);
        //   console.log(currentWord,i,j)
            currentWordHash = wordHashAdd(currentWord)
        //   console.log(currentWordHash)

            let testingWords = true;
            let startIndex = i;
            while(testingWords){
                startIndex++;
                if (startIndex+currentWord.length >= s.length){
                  break;
                }
                testWord = s.slice(startIndex,startIndex+currentWord.length)
                console.log("testWord: "+testWord,
                            "currentWord.Length:" + currentWord.length,
                            "startIndex: "+startIndex,
                            "startIndex+currentWord.length: "+(startIndex+currentWord.length)
                            
                )
                count += wordHashSubtractCheck(testWord,currentWordHash)
            }

                
            }
        }
    }
    return count;

}

function wordHashAdd(word){
  let letterCount = {}
  for(let i = 0;i<word.length;i++){
    if (letterCount[word[i]]){
      letterCount[word[i]] += 1;
    }else{
      letterCount[word[i]] = 1;
    }
  }
  return letterCount;
}

function wordHashSubtractCheck(word,letterCount){
    console.log("************")

    console.log(word,letterCount)
    for(let i = 0;i<word.length;i++){
      if (letterCount[word[i]] && letterCount[word[i]]>0){
        letterCount[word[i]] -= 1;
      }else{
          console.log("returning 0")
        return 0;
      }
    }
    console.log("adding 1",word,letterCount)
    
    return 1;
  }

console.log(sherlockAndAnagrams("abba"));