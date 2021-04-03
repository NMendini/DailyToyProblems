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
  const max1 = { i: 0, j: 0 };
  const max2 = { i: 0, j: 0 };

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] > arr1[max1.i]) {
      max1.i = i;
    }
    if (arr1[i] < arr1[max1.j]) {
      max1.j = i;
    }
    if (arr2[i] > arr2[max2.i]) {
      max2.i = i;
    }
    if (arr2[i] < arr2[max2.j]) {
      max2.j = i;
    }
  }

  const a1a = Math.abs(arr1[max1.i] - arr1[max1.j]);
  const a1b = Math.abs(arr2[max1.i] - arr2[max1.j]);
  const a1c = Math.abs(max1.i - max1.j);

  const a2a = Math.abs(arr1[max2.i] - arr1[max2.j]);
  const a2b = Math.abs(arr2[max2.i] - arr2[max2.j]);
  const a2c = Math.abs(max2.i - max2.j);

  return Math.max((a1a + a1b + a1c), (a2a + a2b + a2c));

  // const expr = Math.abs(arr1[i] - arr1[j]) + Math.abs(arr2[i] - arr2[j]) + Math.abs(i - j);
  // let result = -Infinity;

  // for (let i = 0; i < arr1.length; i += 1) {
  //   for (let j = 0; j < arr2.length; j += 1) {
  //     const expr = Math.abs(arr1[i] - arr1[j]) + Math.abs(arr2[i] - arr2[j]) + Math.abs(i - j);
  //     console.log(arr1[i] - arr1[j], arr2[i] - arr2[j], i - j, 'result: ', expr);
  //     result = expr > result ? expr : result;
  //   }
  // }

  // return result;
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
