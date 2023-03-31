/* @If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once.
7:36
input 10 -> output 23
input 20 -> output 78 */


function multiples(n){
    let sum=0
    for (let num=0;num<n;num++ ){
      if (num%3 == 0 || num%5 == 0) {
      sum += num;
      }
    }
    return sum;
  }
  console.log(multiples(10))
  console.log(multiples(20))