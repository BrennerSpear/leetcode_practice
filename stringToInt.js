/*
Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

Update (2015-02-10):
The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button  to reset your code definition.

*/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var answer = parseInt(str)
    answer = answer ? answer : 0
    answer = (answer > 2147483647) ? 2147483647 : answer
    answer = (answer < -2147483648) ? -2147483648 : answer
    return answer
};