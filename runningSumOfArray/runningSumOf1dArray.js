/* eslint-disable no-console */

/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

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
Output: [3,4,6,16,17]

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const runningSum = (nums) => {
  if (nums.length === 1) {
    return nums;
  }

  const result = [];

  for (let i = 0; i < nums.length; i += 1) {
    const current = nums[i];
    const previous = result[i - 1] || 0;
    result.push(current + previous);
  }

  return result;
};

// ASSERTION FUNCTION
const assertArraysEqual = (actual, expected, testName) => {
  let sameLength = true;
  let sameIndex = true;

  if (actual.length !== expected.length) {
    sameLength = false;
  }

  for (let i = 0; i < actual.length; i += 1) {
    if (actual[i] !== expected[i]) {
      sameIndex = false;
      break;
    }
  }

  if (sameLength && sameIndex) {
    console.log('passed');
  } else {
    console.log(`FAILED "${testName}" expected "${expected}", but got "${actual}"`);
  }
};

// TEST SUITE
const actual1 = runningSum([1, 2, 3, 4]);
const expected1 = [1, 3, 6, 10];
assertArraysEqual(actual1, expected1, 'it should return an array that reflects a running sum of the input');

const actual2 = runningSum([1, 1, 1, 1, 1]);
const expected2 = [1, 2, 3, 4, 5];
assertArraysEqual(actual2, expected2, 'it should return an array that reflects a running sum of the input when provided numbers are the same');

const actual3 = runningSum([1, -1, 1, -1, 1]);
const expected3 = [1, 0, 1, 0, 1];
assertArraysEqual(actual3, expected3, 'it should return an array that reflects a running sum of the input when provided numbers are include negatives');

const actual4 = runningSum([100]);
const expected4 = [100];
assertArraysEqual(actual4, expected4, 'it should return the given array if the length is 1');
