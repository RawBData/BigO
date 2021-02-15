/*
QC
always getting array
at least 3 integers
dont want algo to check for neg numbers and absolute value
There are duplicate values

io
[1,2,3,4,5,-30] = 60
[-50,-20,7,9] = 9000


pseduo
for i would check of the array was exactly lengh multiply all the numers
set up maxmax medmax minmax maxmin and minmin
i would multiply maxmax times medmax times minmax and set to variable test product1
i would multiply maxmax times minmin times maxmin and set to variable test product2
we will choose the greater number of either product1 or product2

Space complexity
0(1)
Time complexity
0(n)


[-50,-20,7,9]
ele    = -20
maxmax = -20
medmax = -50
minmax = -50
maxmin = -50
minmin = -50

[-50,-20,7,9]
ele    = -20
maxmax = -20
medmax = -50
minmax = -50
maxmin = -50
minmin = -50

Below is the answer
*/

function greatestProduct(arr){
    let maxmax = arr[0], medmax= arr[0], maxmin= arr[0], minmin= arr[0], minmax= arr[0];

    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        if(ele>minmax){
            if(ele>medmax){
                if(ele>=maxmax){
                    minmax = medmax;
                    medmax = maxmax
                    maxmax = ele;
                }else{
                    minmax=medmax;
                    medmax=ele
                }
            }else{
                minmax=ele;
            }
            
        } 
            
        if(ele<maxmin){
            if(ele<minmin){
                minmax=minmin;
                minmin=ele;
            }else{
                maxmin = ele;
            }
        }        
    }

    console.log(maxmax,medmax,minmax,maxmin,minmin)
    return Math.max(maxmax*medmax*minmax,maxmax*maxmin*minmin)
}

// console.log(greatestProduct([-50,-20,7,9]));
// console.log(greatestProduct([-50,-20,7,9]));

function maxOfThree(array) {
    // Set up out variables. It's ok if we simply set them all to the first element of the array.
    let max1 = array[0], max2 = array[0], max3 = array[0];
    let min1 = array[0], min2 = array[0];
  
    for (let i = 0; i < array.length; i++) {
      // Handle updating maximum
      if (array[i] > max1) {
        // if this is true, we must update *all* maximum variables, essentially shifting them all down 1.
        max3 = max2;
        max2 = max1;
        max1 = array[i];
      } else if (array[i] > max2) {
        // Same idea......
        max3 = max2;
        max2 = array[i];
      } else if (array[i] > max3) {
        max3 = array[i];
      }
  
      // Handle updating minimum
      if (array[i] < min1) {
        min2 = min1;
        min1 = array[i];
      } else if (array[i] < min2) {
        min2 = array[i];
      }
    }
  
    console.log(max1,max2,max3,min1,min2)
    //Retunr maximums and minimums
    return Math.max(max1 * max2 * max2, max1 * min1 * min2);
  }

  console.log(maxOfThree([-50,-20,7,9]));