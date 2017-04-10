/*

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
(you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

0   4   8    12
1 3 5 7 9 11 13
2   6   10 


P     I     N
A   L S   I G
Y A   H R  
P     I

0     6     c
1   5 7   b d
2 4   8 a
3     9

0         a         k
1       9 b       j
2     8   c     i
3   7     d   h
4 6       e g
5         f



And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".


*/


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows===1) return s
  var zig = ''

  var midRowCount = numRows - 2

  for(var r = 0; r < numRows; r++) {
    var i = r

    var dir = r !== numRows-1 ? true : false

    while(i < s.length) {
      zig += s.charAt(i)

      if(dir) {
        i += (midRowCount-r)*2 + 2
      }
      if(!dir) {
        i += (r-1)*2 + 2
      }

      dir = dir ? false : true

      if(r===0) {
        dir = true
      }
      if(r===numRows-1) {
        dir = false
      }
    }
  }
  return zig
};

var answer = convert('0123456789abcdefghik', 1)
console.log(answer)
var answer = convert('0123456789abcdefghijk', 4)
console.log(answer)
var answer = convert('0123456789abcdefghijk', 6)
console.log(answer)