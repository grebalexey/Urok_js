// let name = "John";
// function areYouPlayingBanjo(name){
//     let firstChar = name.charAt(0);
//     if (firstChar === "R" || firstChar === "r") {
//         return `${name} plays banjo`;
//     } else {
//         return `${name} does not play banjo`;
//     }
// }
// areYouPlayingBanjo(name)



// class User{
//     constructor(firstName, secondName){
//         this.firstName = firstName;
//         this.secondName = secondName;
//     } 
//     sayHello(){
//         console.log(`Привет! Меня зовут ${this.firstName} ${this.secondName}`)
//     }
// }

// const person1 = new User("Алексей", "Гребнев");
// console.log (person1);
// person1.sayHello();

// const person2 = new User("Иван", "Иванов");
// person2.sayHello();


// class Student extends User{
//     constructor(firstName, secondName, degree){
//         super(firstName, secondName);
//         this.degree = degree;
//     }
//     sayHello(){
//         console.log(`Привет! Меня зовут ${this.firstName} ${this.secondName}. У меня ${this.degree} по IT`)
//     }
// }

// const student1 = new Student ("Алексей", "Иванов", 5);
// student1.sayHello();



// class Button{
//     constructor(width, height, text){
//         this.width = width;
//         this.height = height;
//         this.text = text;
//     }
//     showBtn(){
//         document.write(`<button style="height:${this.height}px; width:${this.width}px">${this.text}</button>`)
//     }
// }

// const button1 = new Button (200, 100, "Нажми меня");
// button1.showBtn();


// class BootstrapButton extends Button{
//     constructor(width, height, text, color){
//         super(width, height, text);
//         this.color = color;
//     }
//     showBtn(){
//         document.write(`<button style="height:${this.height}px; width:${this.width}px; background-color:${this.color}">${this.text}</button>`)
//     }
// }

// const button2 = new BootstrapButton (500, 100, "Нажми меня", "red");
// button2.showBtn();


// let value = Math.floor(Math.random() * (100 - 1 + 1) + 1);

// function game(){
//     let answer = +prompt("введите число", "");
//     if (answer > value){
//         alert ("Ваше число больше")
//         game()
//         return
//     } else if (answer < value){
//         alert ("Ваше число меньше")
//         game()
//         return
//     } else if (answer === value){
//         alert ("Угадали!")
//     }
// }



// const btn = document.querySelector("#button")
// console.log(btn)

// const btn1 = $("#button")
// console.log(btn1[0])

// btn.addEventListener("click", function(){
//     console.log("wqwqqwd");
// })

// $("#button").hover(function(){
//     console.log("eto hover")
// })

// btn.addEventListener("mouseover", function(){
//     btn.style.color = "blue";
// })

// btn.addEventListener("mouseout", function(){
//     btn.style.color = "red";
// })

// btn.addEventListener("submit", function(){
//     btn.style.color = "red";
// })


// const clickOnBtn = function(){
//     console.log("Жмякнул снова")
//     console.log(event)
//     btn.classList.add("newClass, newClass2")
//     btn.classList.remove("newClass")
//     btn.classList.toggle("newClass")
//     if (btn.classList.contains("newClass")){

//     }
//     btn.classList.replace("oldClass", "newClass")
// }

// btn.addEventListener("click", clickOnBtn);
// btn.removeEventListener("click", clickOnBtn);





// document.addEventListener("keyup", function(event){
//     if (event.key == "Escape"){
//         alert("вы нажали Escape")
//     }
// })


// document.addEventListener("keydown", function(event){
//     alert(event.key);
//     if (event.key == "F5"){
//         event.preventDefault()
//         return
//     }

// })



const tabHead = document.querySelector(".tabs__head")
const tabBody = document.querySelector(".tabs__body")

tabHead.addEventListener('click', function(){
    tabBody.classList.toggle(".tabs__body--open");
})