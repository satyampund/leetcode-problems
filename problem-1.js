//74. Search a 2D Matrix Solution

var searchMatrix = function (matrix, target) {
  //number of rows
  const r = matrix.length;
  //number of columns
  const c = matrix[0].length;

  //starting point
  let left = 0;
  //Ending point
  let right = r * c - 1;

  while (left <= right) {
    //finding mid element of matix
    let mid = Math.floor((left + right) / 2);
    //fiding row number of mid element
    let row = Math.floor(mid / c);
    //fiding column number of mid element
    let col = mid % c;

    if (matrix[row][col] === target) {
      return true;
      break;
    } else if (matrix[row][col] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};
