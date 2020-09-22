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
  
    findKey: function(object, predicate) {
        for (key in object) {
            const value = predicate(object[key]);
            if (value) { return key; }
        }
    },
  
    drop: function(arr, n = 1) {
        arr.splice(0, n);
        return arr;
    },
  
    dropWhile: function(arr, predicate) {
        const dropNumber = arr.findIndex((element, index) => {
            return !predicate(element, index, arr);
        });
        const droppedArray = this.drop(arr, dropNumber);
        return droppedArray;
    },
  
    chunk: function(arr, size = 1) {
        const arrayChunks = [];
        
        for (let i = 0; i < arr.length; i += size) {
            const arrayChunk = arr.slice(i, i+size);
            arrayChunks.push(arrayChunk);
        }
    
        return arrayChunks; 
    }
};
  
  
  // Do not write or modify code below this line.
  module.exports = _;