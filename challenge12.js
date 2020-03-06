let fib = [1,1];
let i = 0;

while(i < 31) {
    fib.push(fib[i] + fib[i+1]);
    i++;
}

var fibFilt = fib.filter(a => a%2 == 0);

var fibRed = fibFilt.reduce((total, amount) => total + amount);
console.log(fibRed);
