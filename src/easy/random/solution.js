function rng(min, max) {
    const random = Math.floor((Math.random() * max) + min);
    return random;
};
console.log(rng(1, 10))