"use strict";

let userInput;
const numbers = [];
let total=0;


do{
    userInput = Number ( prompt('Введите число'));
   if (isNaN(userInput)){
    alert ('Было введено не число, попробуйте еще раз');
   } else{
    numbers.push(userInput);
   }
}while (userInput !== 0);
console.log(numbers);
 for(let i of numbers){
     total += i;
 }
  if (total !==0){
    alert (`Общая сумма чисел равна ${total}`);
} else  {
    alert ('Вы ничего не ввели! Повторите свою попытку');
}

 



