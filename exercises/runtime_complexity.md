Runtime complexity:

Describe the performance of an algorithm

How much more processing/time is required to run an algo
if we double the input?

string reverse:
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
exponential time: 2^n: if you add a single element to a collection, the processing power required doubles(bad algo, too much time, don't use in interview)

Big O Notation
O(n): linear
O(1): constant
O(n^2): quadratic

Identifying runtime complexity
iterating with simple loop though a single collection: probably O(n). O(3n) =O(n)
iterating through half a collection: still O(n), no time constraints
iterating through 2 diff collections with SEPERATE for loops O(n+m)
two nested for loop iterating through same collection: O(n^2)
two nested for loop iterating through different collection: O(n*m)
sorting: O(n*log(n))
searching a sorted array: O(log(n))

Space complexity:
how much more memory is required by doubling the problem set

String reverse:
for every character, you need 1 additional character for your solution
N complexity

steps: for every step, it outputed 2wice the entry(took double the space)
O(n^2)
