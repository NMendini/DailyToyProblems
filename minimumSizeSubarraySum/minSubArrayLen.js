/**
Given an array of positive integers nums and a positive integer target,
return the minimal length of a contiguous subarray [numsl, numsl+1,
..., numsr-1, numsr] of which the sum is greater than or equal to
target. If there is no such subarray, return 0 instead.

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 105

Follow up: If you have figured out the O(n) solution, try coding another
solution of which the time complexity is O(n log(n)).
*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
  let minLength = Infinity;
  let index = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === target) {
      minLength = 1;
      break;
    }
    sum += nums[i];

    while (sum >= target) {
      minLength = Math.min(minLength, (i - index) + 1);
      sum -= nums[index];
      index += 1;
    }
  }
  return minLength === Infinity ? 0 : minLength;
};

// ASSERTION FUNCTION
const assertEqual = (actual, expected, testName) => {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED "${testName}" expected "${expected}", but got "${actual}"`);
  }
};

// TEST SUITE
const actual1 = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
const expected1 = 2;
assertEqual(actual1, expected1, 'it should return the length of the smallest contiguous subarray whose sum equals target');

const actual2 = minSubArrayLen(4, [1, 4, 4]);
const expected2 = 1;
assertEqual(actual2, expected2, 'it should return 1 when target exists in array');

const actual3 = minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]);
const expected3 = 0;
assertEqual(actual3, expected3, 'it should return 0 when no continguous subarray equals target');

const actual4 = minSubArrayLen(11, [1, 2, 3, 4, 5]);
const expected4 = 3;
assertEqual(actual4, expected4, 'it should return the length of the smallest contiguous subarray whose sum equals target');
