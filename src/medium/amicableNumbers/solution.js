const amicableNumbers = (number) => {
    let sum = 0
    let divnums = []
    for (let i = 1; i < number; i++) {
        const newNumber = number / i
        if (Number.isInteger(newNumber)) {
            sum += i
            divnums.push(i)
        }
    }
    console.log(divnums)
    return sum
}

console.log(amicableNumbers(100000))