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
const findLength = (A, B) => {
  let maxLength = 0;
  let index = 0;

  while (B.length - index > maxLength) {
    let matchLength = 0;

    for (let i = 0; i < A.length; i += 1) {
      if (A[i] === B[index + matchLength]) {
        matchLength += 1;
      } else if (matchLength > 0) {
        break;
      }
    }
    maxLength = Math.max(maxLength, matchLength);
    index += 1;
  }

  return maxLength;
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

const actual2 = findLength([1, 2, 3, 2, 1], [5, 4, 3, 2, 1, 4, 7]);
const expected2 = 3;
assertEqual(actual2, expected2, 'it should return the length of the longest repeated subarray');
