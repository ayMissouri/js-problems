const multiples = (number, length) => {
    const result = []
    for (let i = 1; i <= length; i++) {
        result.push(number * i)
    }
    return result
}

console.log(multiples(8, 8))
