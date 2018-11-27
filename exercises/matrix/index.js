// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 1; //the numbers 1 to how many num spiral is
  let startcol = 0;
  let endcol = n - 1;
  let startrow = 0;
  let endrow = n - 1;

  while (startcol <= endcol && startrow <= endrow) {
    //continues loop as long as these conditions not met
    //top row
    for (let i = startcol; i <= endcol; i++) {
      results[startrow][i] = counter;
      counter++;
    }
    startrow++;

    //right col
    for (let j = startrow; j <= endrow; j++) {
      results[j][endcol] = counter;
      counter++;
    }

    endcol--; //decrement col

    //bottom row
    for (let k = endcol; k >= startcol; k--) {
      results[endrow][k] = counter;
      counter++;
    }

    endrow--;

    //left column
    for (let l = endrow; l >= startrow; l--) {
      results[l][startcol] = counter;
      counter++;
    }

    startcol++; // goes to middle row
  }
  return results;
}

module.exports = matrix;
