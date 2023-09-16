function computeCredut(age, hasJob = false) {
    switch(true) {
        case age > 24 && hasJob:
            return 500;
        case age > 24:
            return 100;
        default:
            return 0;
    }
}

function canBuy(productPrice, age, money, hasJob = false) {
    const creditMoney = computeCredut(age, hasJob);
    return productPrice <= money + creditMoney;
}

console.log(canBuy(2000, 25, 1500, true));