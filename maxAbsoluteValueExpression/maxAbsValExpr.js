/**
 Given two arrays of integers with equal lengths, return the maximum value of:

|arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|

where the maximum is taken over all 0 <= i, j < arr1.length.

Example 1:

Input: arr1 = [1,2,3,4], arr2 = [-1,4,5,6]
Output: 13
Example 2:

Input: arr1 = [1,-2,-5,0,10], arr2 = [0,-2,-1,-7,-4]
Output: 20

Constraints:

2 <= arr1.length == arr2.length <= 40000
-10^6 <= arr1[i], arr2[i] <= 10^6

*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
const maxAbsValExpr = (arr1, arr2) => {
  const innerFunc = (sign1, sign2) => {
    let currentMax = -Infinity;
    let currentMin = Infinity;

    for (let i = 0; i < arr1.length; i += 1) {
      const difference = sign1 * arr1[i] + sign2 * arr2[i] + i;
      currentMax = Math.max(currentMax, difference);
      currentMin = Math.min(currentMin, difference);
    }

    return currentMax - currentMin;
  };

  const options = [[1, 1], [1, -1], [-1, 1], [-1, -1]];

  return Math.max(...options.map((signs) => innerFunc(signs[0], signs[1])));
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
const actual1 = maxAbsValExpr([1, 2, 3, 4], [-1, 4, 5, 6]);
const expected1 = 13;
assertEqual(actual1, expected1, 'it should return the maximum value of the expression, given two arrays of equal length');

const actual2 = maxAbsValExpr([1, -2, -5, 0, 10], [0, -2, -1, -7, -4]);
const expected2 = 20;
assertEqual(actual2, expected2, 'it should return the maximum value of the expression, given two arrays of equal length when negative numbers are present');

const actual3 = maxAbsValExpr([2, 2, 6, 1, -7, -1, -7], [6, 1, -2, -10, -7, -6, -10]);
const expected3 = 31;
assertEqual(actual3, expected3, 'it should return the maximum value of the expression, given two arrays of equal length when duplicate numbers are present');
