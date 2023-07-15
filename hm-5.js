function getSeason() {

  let month = +prompt(`Введите номер месяца`);
    
    if (month === 12 || month === 1 || month === 2) {
     alert("Зима");
    } else if (month >= 3 && month <= 5) {
      alert("Весна");
    } else if (month >= 6 && month <= 8) {
      alert("Лето");
    } else if (month >= 9 && month <= 11) {
      alert("Осень");
    } else {
      alert("Неправильный номер месяца");
    }
  }
  


  
function puzzle() {
  let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

words = words.sort(() => Math.random() - 0.5);

words = words.map(word => word.toLowerCase());

alert(words);

let firstAnswer = prompt('Чему равнялся первый элемент массива?');
let lastAnswer = prompt('Чему равнялся последний элемент массива?');

firstAnswer = firstAnswer.toLowerCase();
lastAnswer = lastAnswer.toLowerCase();

if (firstAnswer === words[0] && lastAnswer === words[words.length - 1]) {
  alert('Поздравляю, вы угадали оба элемента!');
} else if (firstAnswer === words[0] || lastAnswer === words[words.length - 1]) {
  alert('Вы были близки к победе!');
} else {
  alert('Вы ответили неверно.');
}
}