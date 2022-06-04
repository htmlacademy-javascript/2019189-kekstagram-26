function getRandomIntInclusive(min, max) {
    min = 20;
    max = 50;
    
    if (max < min) {
    console.log('Привет');
    }else
    
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  console.log(getRandomIntInclusive());




  let checkLength = function (stroka, maxLength) {
  
  
    if (stroka.length <= maxLength){
    console.log('Длинна строки ' + '"' + stroka + '"' + ' = ' + stroka.length + ' и она меньше ' + maxLength + '. Всё норм!');
      }else
      console.log('Длинна строки ' + '"' + stroka + '"' + ' = ' + stroka.length + ' и она больше чем ' + maxLength + '. Сократите комментарий!');
  };
  checkLength('Кекс', 10);
  
  
  
  //имя_функции(проверяемая_строка, максимальная_длина); 
  // Результат: true, если строка проходит по длине, и false — если не проходит