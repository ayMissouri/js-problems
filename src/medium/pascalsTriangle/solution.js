const pascalsTriangle = (rowAmount) => {
    const shape = []
    for (let i = 0; i < rowAmount; i++) {
        const currentRow = [1]
        if (i >= 1) {
            for (let j = 1; j < shape[i - 1].length; j++) {
                currentRow.push(shape[i - 1][j - 1] + shape[i - 1][j])
            }
            currentRow.push(1)
        }
        shape.push(currentRow)
    }
    return shape
}

console.log(pascalsTriangle(10))