// Javascript:
//
// Create a function that uses `Math.max` to find the greatest value in an array

var arr = [5, 58, 6, 108, 10, 8, 6, 5, 44, 777];

function getMax(arr) {
  var maxEl;
  for (var i = 0; i < arr.length; i++) {
    if (!maxEl) {
      maxEl = arr[i];
    }

    maxEl = Math.max(maxEl, arr[i]);
  }

  return maxEl;
}

var maxEl = getMax(arr);
console.log(maxEl);
