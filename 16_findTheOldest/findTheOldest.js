const findTheOldest = function(arr) {
    const sorted = arr.concat().sort((a, b) => ((a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth)));
    return sorted[sorted.length - 1];
};



// Do not edit below this line
module.exports = findTheOldest;
