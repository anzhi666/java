const payHour = 80;
const hourWork = 5;
const hourProject = 40;
const dayLimit = 11;

const hourLimit = dayLimit - 2;
const limitTime = hourLimit * hourWork;
console.log('Смогу ли я работать? ' + (limitTime > hourProject));

const pay = hourProject * payHour;
console.log('Стоимость работ: ' + pay + '$');