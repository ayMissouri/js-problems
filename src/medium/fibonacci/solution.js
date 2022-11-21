const fibonacci = () => {
    const fibonacciSequence = [1, 1]
    let num1 = 1
    let num2 = 1
    let result = 0
    for (let i = 0; i < 100; i++) {
        result = num1 + num2
        num1 = num2 
        num2 = result
        fibonacciSequence.push(result)
    }
    return fibonacciSequence
}

console.log(fibonacci())