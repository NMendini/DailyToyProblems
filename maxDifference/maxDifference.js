/**
 * You are given an integer num. You will apply the following steps exactly two times:

Pick a digit x (0 <= x <= 9).
Pick another digit y (0 <= y <= 9). The digit y can be equal to x.
Replace all the occurrences of x in the decimal representation of num by y.
The new integer cannot have any leading zeros, also the new integer cannot be 0.
Let a and b be the results of applying the operations to num the first
and second times, respectively.

Return the max difference between a and b.

Example 1:

Input: num = 555
Output: 888
Explanation: The first time pick x = 5 and y = 9 and store the new integer in a.
The second time pick x = 5 and y = 1 and store the new integer in b.
We have now a = 999 and b = 111 and max difference = 888
Example 2:

Input: num = 9
Output: 8
Explanation: The first time pick x = 9 and y = 9 and store the new integer in a.
The second time pick x = 9 and y = 1 and store the new integer in b.
We have now a = 9 and b = 1 and max difference = 8
Example 3:

Input: num = 123456
Output: 820000
Example 4:

Input: num = 10000
Output: 80000
Example 5:

Input: num = 9288
Output: 8700

Constraints:

1 <= num <= 10^8
*/

/**
 * @param {number} num
 * @return {number}
 */
const maxDiff = (num) => {

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
const actual1 = maxDiff(555);
const expected1 = 888;
assertEqual(actual1, expected1, 'it should return the maximum difference between integers');

const actual2 = maxDiff(9);
const expected2 = 8;
assertEqual(actual2, expected2, 'it should return the maximum difference between integers when a single digit is given');

const actual3 = maxDiff(123456);
const expected3 = 820000;
assertEqual(actual3, expected3, 'it should return the maximum difference between integers when leading number is 1');

const actual4 = maxDiff(10000);
const expected4 = 80000;
assertEqual(actual4, expected4, 'it should return the maximum difference between integers when leading number is 1');

const actual5 = maxDiff(9288);
const expected5 = 8700;
assertEqual(actual5, expected5, 'it should return the maximum difference between integers when leading number is 9');
