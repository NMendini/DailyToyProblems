/**
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"

Constraints:

The given address is a valid IPv4 address.
*/

/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function(address) {
  let defangedIP = address.split('.');
  defangedIP = defangedIP.join('[.]');
  return defangedIP;
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
const actual1 = defangIPaddr('1.1.1.1');
const expected1 = '1[.]1[.]1[.]1';
assertEqual(actual1, expected1, 'it should return defanged IP address as string');

const actual2 = defangIPaddr('255.100.50.0');
const expected2 = '255[.]100[.]50[.]0';
assertEqual(actual2, expected2, 'it should return defanged IP address as string');
