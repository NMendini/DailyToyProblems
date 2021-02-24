/**
 * Given two integers dividend and divisor, divide two integers without using multiplication,
 * division, and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero, which means losing its fractional part. For
example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

Note:

Assume we are dealing with an environment that could only store integers within the 32-bit
signed integer range: [−231,  231 − 1]. For this problem, assume that your function returns
231 − 1 when the division result overflows.

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = truncate(3.33333..) = 3.

Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = truncate(-2.33333..) = -2.

Example 3:

Input: dividend = 0, divisor = 1
Output: 0

Example 4:

Input: dividend = 1, divisor = 1
Output: 1

Constraints:

-231 <= dividend, divisor <= 231 - 1
divisor != 0
*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = (dividend, divisor) => {
  // create isNegative boolean set to false
  // create quotient set to 0;
  // create runningDivisor set to divisor

  // if dividend is 0
    // return 0

  // if dividend is equal to divisor
    // return 1

  // if dividend is less than 0
    // toggle isNegative
    // set dividend to absolute value of dividend

  // if divisor is less than 0
    // toggle isNegative
    // set divisor to absolute value of divisor

  // while runningDivisor is less than dividend
    // increment quotient by 1
    // increment runningDivisor by divisor

  // if isNegative is true
    // set quotient to negative

  // return quotient

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
const actual1 = divide(10, 3);
const expected1 = 3;
assertEqual(actual1, expected1, 'it should return the truncated quotient');

const actual2 = divide(7, -3);
const expected2 = -2;
assertEqual(actual2, expected2, 'it should return the truncated quotient when divided by a negative');

const actual3 = divide(0, 1);
const expected3 = 0;
assertEqual(actual3, expected3, 'it should return 0 when the dividend is 0');

const actual4 = divide(1, 1);
const expected4 = 1;
assertEqual(actual4, expected4, 'it should return 1 when both dividend and divisor are the same');
