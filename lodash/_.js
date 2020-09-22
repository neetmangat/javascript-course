const _ = {
    clamp: function(num, lower, upper) {
      const lowerClampedValue = Math.max(num, lower);
      return Math.min(lowerClampedValue, upper);
    },
  
    inRange: function(num, start, end) {
      if (typeof end === 'undefined') {
        end = start;
        start = 0;
      }
  
      if (start > end) {
        const temp = start;
        start = end;
        end = temp;
      }
      
      if (num >= start && num < end) {
        return true;
      } else {
        return false;
      }
    },
  
    words: function(str) {
      return str.split(' ')
    },
  
    pad: function(str, number) {
      if (number < str.length) {
        return str;
      };
  
      let paddingStart = Math.floor((number - str.length) / 2);
      let paddingEnd = number - str.length - paddingStart;
      const paddedString = 
        ' '.repeat(paddingStart) + 
        str + 
        ' '.repeat(paddingEnd);
  
      return paddedString;
    },
  
    has: function(object, key) {
      const hasValue = object[key] !== undefined;
      return hasValue;
    },
  
    invert: function(object) {
      let inverted = {};
  
      for (prop in object) {
        inverted[object[prop]] = prop;
      }
  
      return inverted;
    },
  
    findKey: function() {
      
    },
  
};
  
  
console.log(_.invert({originalKey: "originalValue"}));
  
// Do not write or modify code below this line.
module.exports = _;