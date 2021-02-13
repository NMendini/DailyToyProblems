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
  // create counts object
  const counts = {};
  // create len variable equal to length of nums
  const len = nums.length;

  // iterate over nums
  for (let i = 0; i < len; i += 1) {
    const current = nums[i];
    // if counts at current is undefined
    if (counts[current] === undefined) {
      // set counts at current to 1
      counts[current] = 1;
      // otherwise
    } else {
      // increment counts at current
      counts[current] += 1;
    }

    // if counts at current is greater than len
    if (counts[current] > len / 2) {
      // return current
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
