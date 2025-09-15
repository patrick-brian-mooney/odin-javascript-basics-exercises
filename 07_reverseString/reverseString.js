const reverseString = function(str) {
    const ARR = str.split('')
    let ret = []
    for (let char of ARR) {
        ret.unshift(char)
    }
    return ret.join('')
};

// Do not edit below this line
module.exports = reverseString;
