Runtime complexity:

Describe the performance of an algorithm

How much more processing/time is required to run an algo
if we double the input?

string reverse->
just 1 for loop
each additional character = 1 step thru 1 loop, its 1-1 corellation
N/linear runtime:

step algo:
has 2 for loops
when n=2, it produced 4 things, n=3, 9 things, ...
It has (n\*n) N^2 runtime

Types
Constant time-1: no matter num of elements you work with, it takes the same time
Log time- log(n): if doubling the amount of element doesn't double amount of work. most search operations are log(n)
linear time-n: iterate through all elements in a collection of data, eg for loop from 0 to array.length
quasilinear time-n*log(n): if doubling the amount of element doesn't double amount of work. most sorting operations are n*log(n)
quadratic time: n^2: every element in a collection has to be compared to every other element. the handshake problem
exponential time: 2^n: if you add a single element to a collection, the processing power required doubles
