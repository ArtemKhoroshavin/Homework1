
//ЗАДАНИЕ 1 
let password = 'пароль';
let userPassword = prompt('Введите пароль');
if (userPassword === password) {
console.log('Пароль введен верно');
} else {
console.log('Пароль введен неправильно');
}

//ЗАДАНИЕ 2 
let c = 2;
if(c > 0 && c < 10) {
console.log("Верно");
} else {
console.log("Неверно");
}

//ЗАДАНИЕ 3
let d = 50;
let e = 120;
if (d > 100 || e > 100) {
console.log("Верно");
} else {
console.log("Неверно");
}

//ЗАДАНИЕ 4 
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));
//или
alert(2 + 3);

//ЗАДАНИЕ 5
let monthNumber = 12(prompt('введите номер месяца'))
switch (monthNumber = 12) {
  case 'зима':
    console.log(monthNumber = 1);
    break;
  case 'зима':
    console.log(monthNumber = 2);
    break;
  case 'весна':
    console.log(monthNumber = 3);
    break;
  case 'весна':
    console.log(monthNumber = 4);
    break;
  case 'весна':
    console.log(monthNumber = 5);
    break;
  case 'лето':
    console.log(monthNumber = 6);
    break;
  case 'лето':
    console.log(monthNumber = 7);
    break;
  case 'лето':
    console.log(monthNumber = 8);
    break;
  case 'осень':
    console.log(monthNumber = 9);
    break;
  case 'осень':
    console.log(monthNumber = 10);
    break;
  case 'осень':
    console.log(monthNumber = 11);
    break;
  case 'зима':
    console.log(monthNumber = 12);
    break;  
  default:
    console.log(monthNumber = 13);
    break;
}