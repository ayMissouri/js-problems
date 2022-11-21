const sumOfCubes = (input) => {
    const cubed = input.map(input => input ** 3)
    let sum = 0
    cubed.forEach(element => {
        sum += element
    }); 
    return sum
}

console.log(sumOfCubes([3, 4, 5]))