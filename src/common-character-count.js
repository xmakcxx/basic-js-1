const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1,s2) {
  let strAra = s1
  for(i = 0;i < s2.length ; ++i){
  let b = strAra.indexOf(s2[i])
  if( b !== -1){
    console.log(b)
  strAra = (strAra.slice(0,b) + strAra.slice(b + 1))
  console.log(strAra)}
  }
  return s1.length - strAra.length
  }


module.exports = {
  getCommonCharacterCount
};
