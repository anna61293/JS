
"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"]; 
let login = prompt("Введите новый логин", ""); 


const isLoginValid = function (login) {
if (login.length >= 4 && login.length <= 16) {
return true;
} else {
    alert('Ошибка! Логин должен быть от 4 до 16 символов')
    return false;  
};
};


const isLoginUnique = function (login, allLogins) {
if (!allLogins.includes(login)) {
    return true
}else{   
alert('Такой логин уже используется!');
return false;
};
};

const addLogin = function (login) {
if (isLoginValid(login) && isLoginUnique(login, logins)) {
alert('Логин успешно добавлен!');
logins.push(login);
}
};


addLogin(login);


