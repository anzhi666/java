function toPower(num, power) {
    const res = num ** power;
    return res;
}

console.log(toPower(2, 3));

const toPowerArrow = (num, power1) => num ** power1;
console.log(toPowerArrow(4, 5));


function toPower(num, power = 2) {
    const res = num ** power;
    return res;
}

console.log(toPower(2, 3));
console.log(toPower(2));