const coins = (amount) => {
    const listOfCoins = [100, 25, 10, 5, 1]
    let money = amount
    let coins100 = 0
    let coins25 = 0
    let coins10 = 0
    let coins5 = 0
    let coins1 = 0
while (money >= 100) {
    ++coins100
    money -= 100
} while (money >= 25) {
    ++coins25
    money -= 25
} while (money >= 10) {
    ++coins10
    money -= 10
} while (money >= 5) {
    ++coins5
    money -= 5
} while (money >= 1) {
    ++coins1
    money -= 1
}
return [`${coins100} * 100`, `${coins25} * 25`, `${coins10} * 10`, `${coins5} * 5`, `${coins1} * 1`]

}

console.log(coins(226))