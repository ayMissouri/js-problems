const rangeAdder = (num1, num2) => {
    let sum = 0
    for (let i = num1; i <= num2; i++) {
        sum += i
    }
    return sum
}
console.log(rangeAdder(1, 5))