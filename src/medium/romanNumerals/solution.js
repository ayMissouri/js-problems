const normal = {
    I: 1,
    X: 10,
    C: 100,
    M: 1000,
    V: 5,
    L: 50,
    D: 500
}
const convert = (input) => {
    let sum = 0
    for (let i = input.length - 1; i >= 0; i--) {
        if (normal[input[i]] < normal[input[i + 1]]) {
            sum -= normal[input[i]]
        } else {
            sum += normal[input[i]]
        }
    }
    return sum
}

console.log(convert('MDLXXXIII'))
console.log(convert('XLVI'))
console.log(convert('IV'))