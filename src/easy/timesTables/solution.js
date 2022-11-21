const timesTables = (num) => {
    let timesTables = []
    for (let i = 1; i <= 12; i++) {
        timesTables.push(num * i)
    }
    return timesTables
}

console.log(timesTables(12))