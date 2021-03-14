module.exports = function towelSort (matrix) {
  let matr = []
  if (matrix === undefined){
    return []
  } else {
    for (let i = 0; i < matrix.length; i ++) {
    if (i%2 == 0) {
      matr = matr.concat(matrix[i]);
    }
    if (i%2 != 0) {
      let m = matrix[i].reverse();
      matr = matr.concat(m);
    }
  }
  }
  return matr;
}
