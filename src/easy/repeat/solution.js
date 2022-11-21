const repeat = (string) => {
    let stringLength = string.length
    let newString = ""
    for (let i = 0; i < stringLength; i++) {
        newString += string.substring(i, i+1) + string.substring(i, i+1)
    }
    return newString
}

console.log(repeat('Hello'))