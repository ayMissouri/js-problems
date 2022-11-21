const divide = (num1, num2) => {
    divisors = []
    for (let i = num1; i <= num2; i++) {
        divisors.push(i)
    }
    return divisors
}
const notMultiple = (num3, num4) => {
    if (num3 % num4 === 0) {
        return false
    }
    return true
}
const small = (num1, num2) => {
    let newNum = num2
    const allTheDivisors = divide(num1, num2)
    for (let i = 0; i < allTheDivisors.length; i++) {
        while (notMultiple(newNum, allTheDivisors[i])) {
            newNum += num2
            i = 0
        }
    }
    return newNum
}

console.log(small(1, 20))