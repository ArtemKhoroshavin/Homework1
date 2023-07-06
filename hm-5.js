function getSeason(month) {
    
    if (month === 12 || month === 1 || month === 2) {
      return "Зима";
    } else if (month >= 3 && month <= 5) {
      return "Весна";
    } else if (month >= 6 && month <= 8) {
      return "Лето";
    } else if (month >= 9 && month <= 11) {
      return "Осень";
    } else {
      return "Неправильный номер месяца";
    }
  }
  
  
  console.log(getSeason(1)); 
  console.log(getSeason(4)); 
  console.log(getSeason(7)); 
  console.log(getSeason(10)); 
  console.log(getSeason(15));