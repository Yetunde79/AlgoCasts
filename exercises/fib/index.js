// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//iterative solution
// function fib(n) {
//   //runtime complexity -N/O(N)
//   const results = [0, 1]; //manually insert 0 and 1
//   counter = 2;
//   for (let i = 2; i <= n; i++) {
//     results[i] = results[i - 1] + results[i - 2];
//   }
//   return results[n];
// }

//solve recursive with mmemoization
function memoize(fn) {
  const cache = {}; //stores all of our calls and results to the fast version

  return function(...args) {
    //you dont know how many args
    if (cache[args]) {
      //if we have called the function b4 return result
      return cache[args];
    }

    //if we have never called func b4
    const result = fn.apply(this, args);
    cache[args] = result; //store result

    return result;
  };
}

//recursive solution
function fib(n) {
  //exponential time complexity, as n gets larger, we have exponentially more recursive calls
  if (n < 2) {
    return n; //when n=0 or 1
  }

  return fib(n - 1) + fib(n - 2); //you dont get any nums till the function breaks down to fib(0) or fib(1)
}

fib = memoize(fib);  //set it equal to the slow rec function, so whnever it calls it, its memoized.

//to improve complexity of this we can use memoization:
//store the arg of aech function call witth its result. if same arg called again, it returns precomputed result
//instead of running function again

module.exports = fib;
