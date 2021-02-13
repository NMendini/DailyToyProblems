/* eslint-disable no-console */
/**
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋
times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:

n == nums.length
1 <= n <= 5 * 104
-231 <= nums[i] <= 231 - 1

Follow-up: Could you solve the problem in linear time and in O(1) space?

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  const counts = {};
  const len = nums.length;

  for (let i = 0; i < len; i += 1) {
    const current = nums[i];
    if (counts[current] === undefined) {
      counts[current] = 1;
    } else {
      counts[current] += 1;
    }

    if (counts[current] > len / 2) {
      return current;
    }
  }
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
const actual1 = majorityElement([3, 2, 3]);
const expected1 = 3;
assertEqual(actual1, expected1, 'it should return the element that appears most often');

const actual2 = majorityElement([2, 2, 1, 1, 1, 2, 2]);
const expected2 = 2;
assertEqual(actual2, expected2, 'it should return the element that appears most often');
