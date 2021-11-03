const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};

const createEmpty2DArr = (transposedArr, columns, rows) => {
  for (let i = 0; i < columns; i++) {
    transposedArr.push(new Array(rows));
  }
};

const transpose = function(matrix) {
  const columns = matrix[0].length;
  const rows = matrix.length;
  const transposedArr = [];

  createEmpty2DArr(transposedArr, columns, rows);

  matrix.forEach((row, i) => {
    row.forEach((column, j) => {
      transposedArr[j][i] = column;
    });
  });

  return transposedArr;
};

module.exports = transpose