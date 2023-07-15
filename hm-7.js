// ЗАДАНИЕ 1
let str = 'js';
str = str.toUpperCase();
console.log(str);

// ЗАДАНИЕ 2
const animals = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = 'ко';
animals.forEach((animals) => {
	if (animals.toLowerCase().includes(search.toLowerCase())) {
		console.log(animals);
	}
});

const fruits = ['яблоко', 'груша', 'гриб', 'огурец'];
const search = 'гру';
fruits.forEach((fruits) => {
	if (fruits.toLowerCase().includes(search.toLowerCase())) {
		console.log(fruits);
	}
});

function searchPlace(arr, prefix) {
  const filteredArr = arr.filter((item) =>
    item.toLowerCase().startsWith(prefix.toLowerCase())
  );
  return filteredArr;
}
console.log(searchPlace(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// ЗАДАНИЕ 3
Math.floor(32.58884) 
//32
Math.ceil(32.58884)
//33
Math.round(32.58884)
//33

// ЗАДАНИЕ 4
const numbers = [52, 53, 49, 77, 21, 32];
const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);

console.log("Наименьшее число:", minNumber);
console.log("Наибольшее число:", maxNumber);


// ЗАДАНИЕ 5
function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue- minValue)) + minValue;
    }
    console.log(getRandomInt(1, 10));


// ЗАДАНИЕ 6
function getRandomArrNumbers(num) {
    const length = Math.floor(num / 2);
    const arr = [];
    
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * (num + 1)));
    }
    
    return arr;
  }
  
  console.log(getRandomArrNumbers(7)); 
  console.log(getRandomArrNumbers(12));

  

// ЗАДАНИЕ 7
function generateRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
  }
  
  let startNum = 1;
  let endNum = 10;
  let result = generateRandomNumber(startNum, endNum);
  console.log(result);

  
// ЗАДАНИЕ 8
let currentDate = new Date();
console.log(currentDate);


// ЗАДАНИЕ 9
let currentDate = new Date();
let currentDay = currentDate.getDate();
currentDate.setDate(currentDay + 73);
console.log(currentDate);

// ЗАДАНИЕ 10
function formatDateTime(date) {
    const weekdays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
  
  
    const day = date.getDate();
    const month = months[date.getMonth()];
    const FullYear = date.getFullYear();
    const weekday = weekdays[date.getDay()];
  
  
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    
    const formattedDate = `Дата: ${day} ${month} ${FullYear} - это ${weekday}.`;
    const formattedTime = `Время: ${hours}:${minutes}:${seconds}`;
  
    
    return `${formattedDate}\n${formattedTime}`;
  }
  
  
  const currentDate = new Date();
  const formattedDateTime = formatDateTime(currentDate);
  console.log(formattedDateTime);
  

