"use strict";

let userInput;
const numbers =[];
let total = 0;

do{ 
    userInput = prompt ('Введите число', 0);
    if (userInput === null) break;
    if (isNaN(userInput)){
        alert ('Вы ввели не число. Повторите свою попытку!')
        continue;
    }
    numbers.push(Number(userInput));
}while (true);
console.log(numbers);

 for(let i of numbers){
     total += i;
 }
 if (numbers.length>0){
    alert (`Общая сумма чисел равна ${total}`);
 }
