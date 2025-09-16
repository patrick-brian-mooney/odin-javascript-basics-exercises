const sumAll = function(first, last) {
    if (typeof first != 'number' || typeof last != 'number') {
        return "ERROR"
    }

    if (first < 0 || last < 0) {
        return "ERROR"
    }

    if (!Number.isInteger(first) || !Number.isInteger(last)) {
        return 'ERROR'
    }

    if (first > last) {
        temp = first;
        first = last;
        last = temp;
    }

    let sum = 0;

    for (let cur = first; cur <= last; cur++) {
        sum += cur
    };
    return sum
};

// Do not edit below this line
module.exports = sumAll;
