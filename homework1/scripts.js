let login = prompt('Введите логин');
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
let password;

if (login === null){
    alert ('Отменено пользователем!')
}
else if (login !== adminLogin){
    alert ('Доступ запрещен, неверный логин!')
}
else {
    password = prompt('Введите пароль');
    if(password ===null){
        alert ('Отменено пользователем!')
    }
     else if( password === adminPassword){
         alert('Добро пожаловать!')
     }
     else{
         alert('Доступ запрещен, неверный пароль!')
     }
};
