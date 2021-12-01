function rotateImage(matrix){
    let matrixLength = matrix.length;
    /*
    swap rows with colums by using two pointer aproach, still iterates O(2n) -> O(n)
    [1,2,3]         [1,4,1]
    [4,5,6]     ->  [2,5,6]
    [1,6,0]         [3,6,0]
    i = rows
    j = columns
    for loop
        
    */
    for(let i = 0; i < matrixLength; i++){
        for(let j = i; j < matrixLength; j++){
            let temp = matrix[i][j];
            console.log(temp)
        }
    }
    for(let i = 0; i < matrixLength; i++){
        for(let j = 0; j < (matrix/matrixLength); j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][matrixLength-1-j];
            matrix[i][matrixLength-1-j] = temp;
        }
    }
    return matrix;
}
console.log(rotateImage([[1,2,3],[4,5,6],[1,6,0]]));