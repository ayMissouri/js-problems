const encode = (string) => {
    const wordArray = string.split(' ')
    const encodedArray = []
    for (let i = 0; i < wordArray.length; i++) {
        const firstLetter = wordArray[i].charAt(0).toLowerCase()
        encodedArray.push(wordArray[i].slice(1) + firstLetter + 'ay ')
    }  
return encodedArray.join('')
}

const decode = (string) => {
    const encodedArray = string.split(' ')
    const wordArray = []
    let decodedArray = []
    for (let i = 0; i < encodedArray.length; i++) {
        wordArray.push(encodedArray[i].slice(0, -2))
    }
    for (let i = 0; i < wordArray.length; i++) {
        const lastLetter = wordArray[i].charAt(wordArray[i].length - 1)
        decodedArray.push(lastLetter + wordArray[i].slice(0, -1))
    }
return decodedArray.join(' ')
}

console.log(encode("The quick brown fox"))
console.log(decode('hetay uickqay rownbay oxfay'))