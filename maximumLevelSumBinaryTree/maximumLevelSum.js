/* eslint-disable no-console */
/**
 * Given the root of a binary tree, the level of its root is 1
 * the level of its children is 2, and so on.
 *  */

// Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

// Example 1:

// Input: root = [1,7,0,7,-8,null,null]
// Output: 2
// Explanation:
// Level 1 sum = 1.
// Level 2 sum = 7 + 0 = 7.
// Level 3 sum = 7 + -8 = -1.
// So we return the level with the maximum sum which is level 2.
// Example 2:

// Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
// Output: 2

// Constraints:

// The number of nodes in the tree is in the range [1, 10**4].
// -10**5 <= Node.val <= 10**5

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxLevelSum = (root) => {
  if (root.length === 1) {
    return 1;
  }

  const levelSums = { 1: root[0] };

  const leftIndex = (index) => index * 2 + 1;

  const rightIndex = (index) => index * 2 + 2;

  const innerFunc = (index, currentLevel) => {
    const left = root[leftIndex(index)] || 0;
    const right = root[rightIndex(index)] || 0;

    const sum = left + right;

    if (levelSums[currentLevel] === undefined) {
      levelSums[currentLevel] = sum;
    } else {
      levelSums[currentLevel] += sum;
    }

    if (!levelSums[currentLevel + 1]) {
      if (root[rightIndex(index + 2)]) {
        innerFunc(index + 2, currentLevel + 1);
      }
      if (root[leftIndex(index + 1)]) {
        innerFunc(index + 1, currentLevel + 1);
      }
    }
  };
  innerFunc(0, 2);

  let maxSum = root[0];
  let level = 1;
  const levelKeys = Object.keys(levelSums);

  for (let i = 0; i < levelKeys.length; i += 1) {
    const current = levelSums[levelKeys[i]];

    if (current > maxSum) {
      maxSum = current;
      level = Number(levelKeys[i]);
    }
  }

  return level;
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

// ASSERTION FUNCTION
const assertEqual = (actual, expected, testName) => {
  if (actual === expected) {
    return console.log('passed');
  }
  return console.log(`FAILED "${testName}" expected "${expected}", but got "${actual}"`);
};

// TEST SUITE
const actual1 = maxLevelSum([1, 7, 0, 7, -8, null, null]);
const expected1 = 2;
assertEqual(actual1, expected1, 'it should return the smallest level with the largest sum');

const actual2 = maxLevelSum([989, null, 10250, 98693, -89388, null, null, null, -32127]);
const expected2 = 2;
assertEqual(actual2, expected2, 'it should return the smallest level with the largest sum');
