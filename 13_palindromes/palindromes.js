const palindromes = function (text) {
    const forward = text.split('').filter(c => (c.match(/[a-z0-9]/i))).join('');
    const reverse = forward.split('').reverse().join('');
    return reverse == forward;
};

console.log(palindromes('racecar'));
console.log(palindromes('hello there'));

// Do not edit below this line
module.exports = palindromes;
