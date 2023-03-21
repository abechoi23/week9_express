"""  Two Sum Problem
Create a function that given a list of numbers (that are sorted) and a target number as a sum, return the indexes of the two numbers that when added equal the target number.
Example Input: [2,7,11,15], target = 9
Example Output: [0,1]
Example Input: [4,7,8,9, 10, 15, 19, 20], target = 25
Example Output: [4, 5] """


def two_sum(nums, target):
    left, right = 0, len(nums) - 1
    
    while left < right:
        current_sum = nums[left] + nums[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    
    return []

print(two_sum([2,7,11,15], target = 9))
print(two_sum([4,7,8,9, 10, 15, 19, 20], target = 25))



# This function has a time complexity of O(n), where n is the length of the input list, since it uses a two-pointer approach that only requires a single pass through the list.