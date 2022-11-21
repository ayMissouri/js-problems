const reverse = (input) => {
    let inputString = []
    if (typeof input !== 'string') {
        inputString = input.toString
    } else {
        inputString = input
    }
    const outputArray = []
    for (let i = 0; i < inputString.length; i++) {
        outputArray.unshift(inputString[i])
    }
    const outputString = outputArray.join('')
    return outputString
}

console.log(reverse("String"))