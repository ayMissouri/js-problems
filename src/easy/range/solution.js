const range = (list) => {
    let highestNum = 0
    for (let i = 0; i < list.length; i++) {
        if (highestNum < list[i]) {
            highestNum = list [i]
        }
    }
    let lowestNum  = highestNum
    for (let i = 0; i < list.length; i++) {
        if (lowestNum > list[i]) {
            lowestNum = list[i]
        }
    }
    return highestNum - lowestNum
}

console.log(range([10, 50, 10, 40, 78, 20, 60]))