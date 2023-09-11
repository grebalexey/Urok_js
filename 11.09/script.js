// let value = prompt("Введите число", "")

// if (value > 0) {
//     alert("Положительное")
// } else if (value < 0){
//     alert("Отрицательное")
// } else{
//     alert("Ноль")
// }

// let value = prompt('Укажите возраст', '')

// if ((value > 0) && (value <= 120)){
//     alert('Верно')
// } else {
//     alert('Неверно')
// }

// let value = prompt('Введите число', '')

// if (value >= 0) {
//     alert (value)
// } else {
//     alert (value * (-1))
// }

// let x = prompt('Введите X', '')
// let y = prompt('Введите Y', '')

// if (x>0 && y>0) {
//     alert ('Первая четверть')
// } else if (x>0 && y<0){
//     alert ('Четвертая четверть')
// } else if (x<0 && y<0){
//     alert ('Третья четверть')
// } else if (x<0 && y>0){
//     alert ('вторая четверть')
// } else {
//     alert ('Начало координат')
// }


// let month = +prompt('Введите номер месяца', '')

// switch (month) {
//     case 1:
//         alert ('Январь')
//         break;
//     case 2:
//         alert ('Февраль')
//         break;
//     case 3:
//         alert ('Март')
//         break;
//     case 4:
//         alert ('Апрель')
//         break;
//     case 5:
//         alert ('Май')
//         break;
//     case 6:
//         alert ('Июнь')
//         break;
//     case 7:
//         alert ('Июль')
//         break;
//     case 8:
//         alert ('Август')
//         break;
//     case 9:
//         alert ('Сентябрь')
//         break;
//     case 10:
//         alert ('Октябрь')
//         break;
//     case 11:
//         alert ('Ноябрь')
//         break;
//     case 12:
//         alert ('Декабрь')
//         break;
//     default:
//         alert('Вы ввели неверный месяц')
//         break;
// }

// let x = +prompt('введите первое число')
// let y = +prompt('введите второе число')
// let z = prompt('введите знак')

// function sum(z = '+'){
//     alert (x + y)
// }

// function subtraction(z = '-'){
//     alert (x - y)
// }

// function multiplication(z = '*'){
//     alert (x * y)
// }

// function division(z = '/'){
//     alert (x / y)
// }

// Calc(10,5,/)

function Calc(xF,yF,zF){
    switch (zF) {
        case '+':
            alert(xF + yF)
            break;
        case '-':
            alert(xF - yF)
            break;
        case '*':
            alert(xF * yF)
            break;
        case '/':
            alert(xF / yF)
            break;
        default:
            break;
    }
}

// switch (z) {
//     case '+':
//         sum()
//         break;
//     case '-':
//         subtraction()
//         break;
//     case '*':
//         multiplication()
//         break;
//     case '/':
//         division()
//         break;
//     default:
//         break;
// }