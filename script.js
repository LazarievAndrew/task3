var inputName = prompt('Введите Ваше имя');
var yourBirthdayYear = prompt('Введите год Вашего рождения');
var currentYear = new Date().getFullYear();
yourAge = currentYear - yourBirthdayYear;

if( isNaN (yourAge) ){
    alert('Год рождения введен некорректно');
}else{
    alert(inputName + ' ' + yourAge);
}