function getSeason() {

  let month = prompt(`Введите номер месяца`);
    
    if (month == 12 || month == 1 || month == 2) {
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
  
  
