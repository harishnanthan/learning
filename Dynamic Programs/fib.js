/**
 * the above function have a problem,
 * time complexity is (2 pow n), so if i give input is 15 is takes 1.1258999e+15.
 * 
 * @param {Number} n 
 * @returns nth element of the fibonacci series
 */

const fib = (n) => {
  // check the base case
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(3)) // 2
console.log(fib(4)) // 3
console.log(fib(5)) // 5
console.log(fib(50)) // it will take more time

/**
 * this function we are using memoization, 
 * if the value is already calculated return the value without calculating using memo Object{}
 * 
 * @param {Number} n 
 * @param {Object} memo 
 * @returns nth element of the fibonacci series
 */

const fibonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log(fibonacci(3)) // 2
console.log(fibonacci(4)) // 3
console.log(fibonacci(5)) // 5
console.log(fibonacci(50)) // 12586269025