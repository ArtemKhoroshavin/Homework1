//ЗАДАНИЕ 1
let i = 1;
let n = Number(prompt('Сколько раз вам сказать привет?'));
while (i <= n) {
    alert('Привет')
    i++;
} 


// ЗАДАНИЕ 2
let number;
do {
number = Number (prompt('Введите цифру от 1 до 5'));
} while (number >=5 );


// ЗАДАНИЕ 3
let number = 7;
do {
number = Number (prompt('Введите цифру от 7 до 22'));
} while (number >= 7 && number <= 22);


// ЗАДАНИЕ 4
let obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
  };
  for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов.`);
  }

  
  // ЗАДАНИЕ 5
  let n = 1000;
    let num = 0;
    while (n >= 50) {
    n = n / 2;
    num++;
}
    console.log("Итоговое число:", n);
    console.log("Количество итераций:", num);


    // ЗАДАНИЕ 6
    let firstFriday = 5;

    for (let day = 1; day <= 31; day++) {
  let date = new Date(2022, 0, day); 
  let dayOfWeek = date.getDay(); 

  if (dayOfWeek == firstFriday || dayOfWeek == firstFriday + 7) {
    console.log("Сегодня пятница, " + day + "-е число. Необходимо подготовить отчет.");
  }
}