/**
 Given an array nums of n integers where nums[i] is in the range [1, n], return an array of
 all the integers in the range [1, n] that do not appear in nums.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]

Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n

Follow up: Could you do it without extra space and in O(n) runtime? You may assume the
returned list does not count as extra space.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
  // change nums to a Set
  // create empty result array

  // iterate from 1 to length of nums
    // create size variable set to size of Set
    // add current to Set
    // if size of Set is not equal to size variable
      // push current to result

  // return result

};

// ASSERTION FUNCTION
const assertArraysEqual = (actual = [], expected, testName) => {
  let sameLength = true;
  let sameValues = true;

  if (actual.length !== expected.length) {
    sameLength = false;
  }

  for (let i = 0; i < actual.length; i += 1) {
    if (actual[i] !== expected[i]) {
      sameValues = false;
      break;
    }
  }

  if (sameLength && sameValues) {
    console.log('passed');
  } else {
    console.log(`FAILED "${testName}" expected [${expected}], but got [${actual}]`);
  }
};

// TEST SUITE
const actual1 = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
const expected1 = [5, 6];
assertArraysEqual(actual1, expected1, 'it should return all numbers that are missing from the range');

const actual2 = findDisappearedNumbers([1, 1]);
const expected2 = [2];
assertArraysEqual(actual2, expected2, 'it should return all numbers that are missing from the range');
