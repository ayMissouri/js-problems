const factorializermajig = (num) => {
    let sum = num
    if (sum == -1 || sum == 0 || sum == 1) {
        return sum
    } else {
        for (let i = num - 1; i >= 1; i--) {
            sum = sum * i
        }
        return sum
    }
}
console.log(factorializermajig(5))