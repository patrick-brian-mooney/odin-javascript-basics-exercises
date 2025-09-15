const repeatString = function(str, count) {
    if (count < 0) {
        return 'ERROR'
    }
    let res = ''
    for (let c = 1; c <= count; c++) {
        res += str
    }
    return res
};

// Do not edit below this line
module.exports = repeatString;
