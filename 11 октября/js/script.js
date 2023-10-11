particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

let callbackButton = document.querySelector(".callback-button-js");
let modal = document.querySelector(".modal");

callbackButton.addEventListener('click', function(){

if(!modal.classList.contains("js-active")){
    setTimeout(() => {
        modal.classList.add("js-active");
    })
    
    
}
})

function closeModal(modal){
    modal.classList.remove("js-active");

}

document.addEventListener('click', function(event){
    console.log(event);

    if(!modal.contains(event.target) && modal.classList.contains("js-active")){
        closeModal(modal);
    }
})