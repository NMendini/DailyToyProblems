/**
 Given an array nums containing n distinct numbers in the range [0, n], return the only
 number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n)
runtime complexity?

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the
missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the
missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the
missing number in the range since it does not appear in nums.
Example 4:

Input: nums = [0]
Output: 1
Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the
missing number in the range since it does not appear in nums.

Constraints:

n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {

};

// ASSERTION FUNCTION
const assertEqual = (actual, expected, testName) => {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] expected "${expected}", but got "${actual}"`);
  }
};

// TEST SUITE
const actual1 = missingNumber([3, 0, 1]);
const expected1 = 2;
assertEqual(actual1, expected1, 'it should return the number missing from range');

const actual2 = missingNumber([0, 1]);
const expected2 = 1;
assertEqual(actual2, expected2, 'it should return the number missing from range');

const actual3 = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
const expected3 = 8;
assertEqual(actual3, expected3, 'it should return the number missing from range');

const actual4 = missingNumber([0]);
const expected4 = 1;
assertEqual(actual4, expected4, 'it should return the number missing from range');
