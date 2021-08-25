// You should implement your task here.

module.exports = function towelSort(matrix) {
  let answer = []
  if (matrix !== undefined) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
      	answer.push((i % 2 === 0) ? matrix[i][j] : matrix[i][matrix[i].length - 1 - j])
      }
    }
  } 
  return answer;
};
