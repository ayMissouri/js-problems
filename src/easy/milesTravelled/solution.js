const milesTravelled = (time, speed) => {
    const distance = Math.round(time * (speed / 60))
    return distance
}

console.log(milesTravelled(60, 10))