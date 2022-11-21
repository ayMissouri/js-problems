const convertToMiles = (kilometers) => {
    const result = Math.round(kilometers * 1.6)
    return result
}

console.log(convertToMiles(2))