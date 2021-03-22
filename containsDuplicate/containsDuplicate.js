/**
Given an integer array nums, return true if any value appears at least
twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {

};

// ASSERTION FUNCTION
const assertEqual = (actual, expected, testName) => {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] expected ${expected}, but got ${actual}`);
  }
};

// TEST SUITE
const actual1 = trap([1, 2, 3, 1]);
const expected1 = true;
assertEqual(actual1, expected1, 'it should return true when a duplicate is present');

const actual2 = trap([1, 2, 3, 4]);
const expected2 = false;
assertEqual(actual2, expected2, 'it should return false when no duplicate is present');

const actual3 = trap([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
const expected3 = true;
assertEqual(actual3, expected3, 'it should return true when multiple duplicates are present');
