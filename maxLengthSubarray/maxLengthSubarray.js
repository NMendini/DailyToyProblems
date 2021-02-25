/**
 Given two integer arrays A and B, return the maximum length of an
 subarray that appears in both arrays.

Example 1:

Input:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
Output: 3
Explanation:
The repeated subarray with maximum length is [3, 2, 1].

Note:

1 <= len(A), len(B) <= 1000
0 <= A[i], B[i] < 100
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {

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
const actual1 = findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]);
const expected1 = 3;
assertEqual(actual1, expected1, 'it should return the length of the longest repeated subarray');
