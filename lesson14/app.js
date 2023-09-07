const balance = 900;
const bonusBalance = 101;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy = (balance > 1000 || bonusBalance > 100) 
    && !isBanned 
    && !isExist 
    && isSelling;
console.log(`Могу купить игру: ${canBuy ? 'Да' : 'Нет'}`)