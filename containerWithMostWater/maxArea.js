/**
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at
 * coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i
 * is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a
 * container, such that the container contains the most water.

Notice that you may not slant the container.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this
case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
Example 3:

Input: height = [4,3,2,1,4]
Output: 16
Example 4:

Input: height = [1,2,1]
Output: 2

Constraints:

n == height.length
2 <= n <= 3 * 104
0 <= height[i] <= 3 * 104
*/

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  // create maxVolume variable, set to 0

  // iterate through height
    // set variable left to current
    // iterate through height from i + 1
      // set variable right to current
      // set distance to j - i
      // set wallHeight to lesser of left or right
      // set volume to product of distance and wallHeight
      // if volume is greater than maxVolume
        // set maxVolume to volume

  // return maxVolume
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
const actual1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;
assertEqual(actual1, expected1, 'it should return the largest amount the container can hold');

const actual2 = [1, 1];
const expected2 = 1;
assertEqual(actual2, expected2, 'it should return the largest amount the container can hold when only 2 indices are given');

const actual3 = [1, 2, 1];
const expected3 = 2;
assertEqual(actual3, expected3, 'it should return the largest amount the container can hold when inner indices are higher');
