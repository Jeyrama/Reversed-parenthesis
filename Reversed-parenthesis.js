/*
Given a string, 
return the minimal number of parenthesis 
reversals needed to make balanced parenthesis.

For example:
  solve(")(") = 2 Because we need to reverse ")" to "(" and "(" to ")". These are 2 reversals. 
  solve("(((())") = 1 We need to reverse just one "(" parenthesis to make it balanced.
  solve("(((") = -1 Not possible to form balanced parenthesis. Return -1.

Note: Parenthesis will be either "(" or ")". 
*/


// Solution

function solve(s) {
  while ( s.includes('()') ) {
    s = s.replace(/\(\)/g, '');
  }
  if ( s.length % 2 === 1 ) return -1;
  let count = 0;
  const obj = {
      ')(': 2,
      '((': 1,
      '))': 1,
    };
  for ( let i = 0; i <= s.length-2; i += 2 ) {
    count += obj[s[i]+s[i+1]]
  }
  return count;
}