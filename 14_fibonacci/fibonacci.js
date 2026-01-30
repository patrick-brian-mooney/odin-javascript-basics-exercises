const fibonacci = function(n) {
    if (n < 3) {
        return 1;
    } else {
        let a = 1;
        let b = 1;
        let c = undefined
        for (i = 1 ;; i++) {
            c = a + b;
            if (i >= (n - 2)) {
                return c;
            }
            a = b;
            b = c;
        }
    }
};

function test() {
    for (let n = 1 ; n <= 100 ; n++) {
        console.log(`${n} => ${fibonacci(n)}`)
    }
}


// Do not edit below this line
module.exports = fibonacci;
