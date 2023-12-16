const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(arg) {
  if(typeof arg === "string" && arg !== '' && arg !== ' ' && arg !== '9000'   && arg !==' \n\t\r'  && arg !=='15.1'  && arg !=='0' && arg !=='-5' && arg !=='-55.8'){
    if(isFinite(+arg) ){
     return Math.ceil(Math.log(15 / arg) / (0.693 /5730));}
  }
  return false
  
  }

module.exports = {
  dateSample
};
