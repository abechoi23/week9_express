"""  Running Sum of 1d Array
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]  """


def running_sum(nums):
    n = len(nums)
    output = [0] * n
    running_total = 0
    for i in range(n):
        running_total += nums[i]
        output[i] = running_total
    return output

print(running_sum([3,1,2,10,1]))