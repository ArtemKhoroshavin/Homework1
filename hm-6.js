// ЗАДАНИЕ 1
const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
}

// ЗАДАНИЕ 2
arr = [1, 5, 4, 10, 0, 3]
number = 4

position = arr.indexOf(number)
console.log (position)

// ЗАДАНИЕ 3
let num = [1, 3, 5, 10, 20];
let arraynum = num.join(' ');
console.log(arraynum);

// ЗАДАНИЕ 4
let array = [];
for (let i = 0; i < 3; i++) {
let innerArray = [];
for (let j = 0; j < 3; j++) {
innerArray.push(1);
}
array.push(innerArray);
}
console.log(array);

//ЗАДАНИЕ 5
let greetings = [1, 1, 1];
 greetings.push(2, 2, 2);
console.log(greetings);


// ЗАДАНИЕ 6
let greetings = [9, 8, 7, 'a', 6, 5];
greetings = greetings.sort();
console.log(greetings);

console.log(greetings.pop());
console.log(greetings);


//ЗАДАНИЕ 7
let array = [9, 8, 7, 6, 5];
let guess = prompt("Угадайте число:");

if (array.includes(Number(guess))) {
  alert("Угадал");
} else {
  alert("Не угадал");
}


// ЗАДАНИЕ 8
const word = 'abcdef';
const reversedWord = word.split('').reverse().join('');
console.log(reversedWord);

// ЗАДАНИЕ 9
let num = [
    [1, 2, 3,],
    [,4, 5, 6],
];
let arraynum = num.join('');
console.log(arraynum);

// ЗАДАНИЕ 10 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length - 1; i++) {
  let sum = arr[i] + arr[i + 1];
  console.log(sum);
}

// ЗАДАНИЕ 11
function squareArray(arr) {
    return arr.map(num => num ** 2);
  }
  const num = [20, 2, 5, 8];
  const squaredNum = squareArray(num);
  console.log(squaredNum);

  // ЗАДАНИЕ 12
  function getLengthWords(arr) {
    lengths = [];
 
   for ( i = 0; i < arr.length; i++) {
      word = arr[i];
      length = word.length;
     lengths.push(length);
   }
 
   return lengths;
 }
 
  words = ['слово', '', 'слог', 'длинное предложение', 'буква'];
  lengths = getLengthWords(words);
 
 console.log(lengths);

 //ЗАДАНИЕ 13
 function filterPositive(array) {
    let result = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0) {
        result.push(array[i]);
      }
    }
  
    return result;
  }
  
  console.log(filterPositive([-1, 0, 5, -10, 56]));
  console.log(filterPositive([-25, 25, 0, -1000, -2]));

  