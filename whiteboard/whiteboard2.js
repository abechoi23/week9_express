/* Two Sum Problem
Create a function that given a list of numbers (that are sorted) and a target number as a sum, return the indexes of the two numbers that when added equal the target number.
Example Input: [2,7,11,15], target = 9
Example Output: [0,1]
Example Input: [4,7,8,9, 10, 15, 19, 20], target = 25
Example Output: [4, 5] */

function twoSum(num, target) {
    let left = 0 
    let right = num.length - 1

    while (left < right) {
        const currentSum = num[left] + num[right];
        if (currentSum === target) {
            return [left, right]
        } else if (currentSum < target) {
            left++
        } else {
            right--
        }
    }
    return []
}

console.log(twoSum([2,7,11,15], target = 9))
console.log(twoSum([0,1], target = 9))


// This implementation has a time complexity of O(n), where n is the length of the input array.


function twoSum(list, target){
    const dict={}
    for(i=0;i<list.length;i++){  //O(n)
        const diff= target-list[i]
        if(diff in dict){
            return[dict[diff]]
        }
        dict[list[i]]=i
    }
    return []
}

console.log(twoSum([2,7,11,15], target = 9))