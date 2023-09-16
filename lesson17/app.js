function canAccessWebsite(age) {
    if (age < 18) {
        return 'Нет';
    }
    return 'Да';
};

console.log(canAccessWebsite(16));

const canAccessWebsite2 = age => age < 18 ? 'Нет' : 'Да';
console.log(canAccessWebsite2(18));

////////////////////////////////////////////////////////
const KG_In_USD = 7;
const KM_In_USD = 5;

function calculateW(present) {
    return present * KG_In_USD;
}

function calculateKM(distance) {
    return distance * KM_In_USD;
}


function getExchangePrice(present1, present2, distance) {
    const price1 = calculateW(present1);
    const price2 = calculateW(present2);
    const distancePrice = calculateKM(distance);
    return price1 + price2 + distancePrice;
}

console.log(getExchangePrice(1,2,10));