const role = 'manager';

if (role === 'manager') {
    console.log('Менеджер');
} else if (role === 'admin') {
    console.log('Админ');
} else if (role === 'ceo') {
    console.log('CEO');
} else {
    console.log('Мы тебя не знаем');
}

switch (role) {
    case 'manager': // role === 'manager'
        console.log('Менеджер');
        break;
    case 'admin': //role === 'admin'
        console.log('Админ');
        break;
    case 'ceo': //role === 'ceo'
        console.log('CEO');
        break;
    default:
        console.log('Мы тебя не знаем');

}  

switch (role) {
    case 'manager':
    case 'admin':
        console.log('Не руководитель');
        break;
    case 'ceo': 
        console.log('Руководитель');
        break;
    default:
        console.log('Мы тебя не знаем');
}   

const num = 1;

switch (true) {
    case num  > 0:
        console.log('Положительный');
        break;
    case num < 0: 
        console.log('Отрицательный');
        break;
    default:
        console.log('Ноль!');
}