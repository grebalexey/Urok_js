'use strict'

// var name = 0;
// let name2 = 0;
// const constName = 0;

// разные переменные
// let name;
// let Name;

/* Комментарий 
в несколько строк */

// num = 0;
// string = "Это строка";
// bulean = true/ false
// NaN 
// null - пустая переменная
// undefined 
// Infinity
// -Infinity

// Object

// let x = 20;
// console.log("Тест")
// console.log(x)

// console.log(document)
// console.log(window)

// +
// -
// *
// /
// ++ 
// --
// ** возведение в степень
// % выводит остаток деления

// const block = document.querySelector(".block")
// console.log(block)
// const insideBlock = block.querySelector(".insideblock")

// alert("какой-то текстовый текст")

// confirm("какой-то вопрос")


// let value = prompt('Введите значение', '')
// console.log(value)
// console.log(typeof value)

// Запросить число, вывести его квадрат
// let value = prompt("введите число", "")
// alert(value ** 2)

// Запросить два числа вывести среднее арифметическое
// let value = prompt("Введите число 1", "")
// let valueTwo = prompt("Введите число 2", "")
// alert((+value + +valueTwo)/2)


// if(x > y) {
//     // что делать, если условие верно
// }

// (x < y)
// (x >= y)
// (x <= y)
// // равно по смыслу
// (x == y)
// // равно и по смыслу, и по типу, проверка начинается с типа
// (x === y)
// // не равно
// (x != y)

// if(2 > 3){
//     alert("Верно")
// } else{
//     alert("Неверно")
// }

// let uls = 0;
// let uls2 = 0;

//когда не знаем количество итераций
// while(uls < 10){
//     console.log (uls)
//     uls++
// }

// do{
//     console.log (uls2)
//     uls2++;
// } while (uls2 < 10);

//когда заем количество итераций
// for (let i = 0; i < 10; i++) {
//     console.log(i);
    
// }


// обращение при jquery
// let block = $(".block")
// console.log(".block")

$(".block").click(function(){
    // $(".block").addClass("newClass")
    // $(".block").removeClass("newClass")
    // $(".block").toggleClass("newClass")
    $(this).toggleClass("newClass")
})

