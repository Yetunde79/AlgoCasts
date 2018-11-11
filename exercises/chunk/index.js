// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const chunked = [];
//   for (let element of array) {
//     const last = chunked[chunked.length - 1]; //retrieve last element of chunked array

//     if (!last || last.length == size) {
//       //if last element does not exist or last length equal to chunk size(if last array is already full/equal to size)
//       //push chunk into chunked
//       chunked.push([element]); //puting element we are currently iterating over and chunk
//     } else {
//       //add current element into the chunk
//       last.push(element);
//     }
//   }
//   return chunked;
// }

function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size)); //push slice of array size into chunk. slice doesn't include end num
    index += size;
  }
  return chunked;
}

module.exports = chunk;
