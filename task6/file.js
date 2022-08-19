// 1. In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use.

try {
    console.log(a);
    let a = 3;
} catch (err) {
    console.log('let must be declared before use')
};

// When running 1/0, the error 'cannot be divided by zero'.

let a = 1;
let b = 0;
try {
    if (b == 0) {
        throw new Error('Cannot be divided by zero');
    }
    console.log(a / b)
} catch (err) {
    console.log(err.message);
};