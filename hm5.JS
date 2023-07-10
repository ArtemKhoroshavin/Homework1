// ЗАДАНИЕ 1
function num(a, b) {
    if (a <= b) {
      return a;
    } else {
      return b;
    }
  }
  console.log(num(8, 4)); 
  console.log(num(6, 6));
  
  // ЗАДАНИЕ 2
  function check(number) {
    if (number % 2 === 0) {
      return 'Число четное';
    } else {
      return 'Число нечетное';
    }
  }
  console.log(check(6));
  console.log(check(11));

  // ЗАДАНИЕ 3
  function printSquare(number) {
    let square = number * number;
    console.log("Квадрат числа " + number + " равен " + square);
  }
  
  
  function returnSquare(number) {
    let square = number * number;
    return square;
  }
  
  
  printSquare(5); 
  
  
    result = returnSquare(8);
  console.log(result);

  // ЗАДАНИЕ 4
  function old() {
    let age = parseInt(prompt('Сколько вам лет?'));
  
    if (age < 0) {
      console.log('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
      console.log('Привет, друг!');
    } else if (age >= 13) {
      console.log('Добро пожаловать!');
    }
  }
  
  old();

  // ЗАДАНИЕ 5
  function multiNumbers(num1, num2) {
    if (typeof num1 !== 'number' || isNaN(num1) || typeof num2 !== 'number' || isNaN(num2)) {
      return 'Одно или оба значения не являются числом';
    }
  
    return num1 * num2;
  }
  
  console.log(multiNumbers(5, 3));
  console.log(multiNumbers('10', 2)); 
  console.log(multiNumbers(4, 'abc'));

  // ЗАДАНИЕ 6
  function cubeNumber() {
    let userInput = prompt('Введите число:');
    let number = parseFloat(userInput);
  
    if (isNaN(number)) {
      return 'Переданный параметр не является числом';
    }
  
    let cube = Math.pow(number, 3);
    return number + ' в кубе равняется ' + cube;
  }
  
  for ( i = 0; i <= 10; i++) {
    console.log(cubeNumber());
  }

  // ЗАДАНИЕ 7
  const circle1 = {
    radius: 5,
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  
  const circle2 = {
    radius: 7,
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  
  console.log("Площадь circle1:", circle1.getArea()); 
  console.log("Периметр circle1:", circle1.getPerimeter()); 
  
  console.log("Площадь circle2:", circle2.getArea()); 
  console.log("Периметр circle2:", circle2.getPerimeter());