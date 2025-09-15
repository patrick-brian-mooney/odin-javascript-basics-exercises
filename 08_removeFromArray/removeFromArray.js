const removeFromArray = function(arr, ...removeArgs) {
    return arr.filter(i => !(removeArgs.includes(i)))
};

// Do not edit below this line
module.exports = removeFromArray;
