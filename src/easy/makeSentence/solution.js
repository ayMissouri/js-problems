const makeSentence = (string) => {
    const firstChar = string.charAt(0).toUpperCase()
    const newString = firstChar + string.slice(1)
    const lastChar = string.charAt(string.length - 1)
    if (lastChar === '!' || lastChar === '.' || lastChar === '?') {
        return newString
    } else {
        return newString + '.'
    }
}

console.log(makeSentence('hello to the whole world!'))
