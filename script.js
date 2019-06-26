var inputName = prompt('Введите Ваше имя');
var yourBirthdayYear = prompt('Введите год Вашего рождения');
var currentYear = new Date().getFullYear();

while(isNaN(+yourBirthdayYear) || yourBirthdayYear == null || yourBirthdayYear < 1900 || yourBirthdayYear > currentYear){
    yourBirthdayYear = prompt('Введите год Вашего рождения корректно');
}

var yourAge = currentYear - yourBirthdayYear;

alert(inputName + ' ' + yourAge);