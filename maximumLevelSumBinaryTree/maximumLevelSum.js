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
  // if root length is 1
  if (root.length === 1) {
    // return 1
    return 1;
  }

  // create levelSums object with key of 1 set to root at 0
  const levelSums = { 1: root[0] };
  // create level variable

  // create leftIndex function -params (index)
  const leftIndex = (index) => index * 2 + 1;
    // return index multiplied by 2 + 1

  // create rightIndex function -params (index)
  const rightIndex = (index) => index * 2 + 2;
    // return index multiplied by 2 + 2

  // innerFunc -params(index, currentLevel)
  const innerFunc = (index, currentLevel) => {
    // create left variable equal to root at leftIndex(index) or 0
    const left = root[leftIndex(index)] || 0;
    // create right variable equal to root at rightIndex(index) or 0
    const right = root[rightIndex(index)] || 0;

    // create sum variable equal to left + right
    const sum = left + right;

    // if levelSums at currentLevel is equal to undefined
    if (levelSums[currentLevel] === undefined) {
      // set levelSums at current level equal to sum
      levelSums[currentLevel] = sum;
    // otherwise
    } else {
      // add sum to levelSums at current level
      levelSums[currentLevel] += sum;
    }

    // if levelSums at currentLevel + 1 does not exist
    if (!levelSums[currentLevel + 1]) {
      // if root at rightIndex(index +2)
      if (root[rightIndex(index + 2)]) {
        // invoke innerFunc with index + 2, currentLevel + 1
        innerFunc(index + 2, currentLevel + 1);
      }
      // if root at leftIndex(index +1)
      if (root[leftIndex(index + 1)]) {
        // invoke innerFunc with index + 1, currentLevel + 1
        innerFunc(index + 1, currentLevel + 1);
      }
    }
  };
  // invoke innerFunc with 0 and 2
  innerFunc(0, 2);

  // create maxSum variable equal to root at 0
  let maxSum = root[0];
  // create level equal to 0
  let level = 1;
  // create levelKeys equal to Object.keys from levelSums
  const levelKeys = Object.keys(levelSums);

  // iterate through levelKeys
  for (let i = 0; i < levelKeys.length; i += 1) {
    const current = levelSums[levelKeys[i]];
    // if current is greater than maxSum
    if (current > maxSum) {
      // set maxSum to current
      maxSum = current;
      // set level to current key
      level = Number(levelKeys[i]);
    }
  }

  // return level
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
