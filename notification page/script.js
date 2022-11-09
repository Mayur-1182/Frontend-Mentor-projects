let btn=document.querySelector(".btn")
let unread=document.querySelectorAll(".unread-msg")
let red_dot=document.querySelectorAll(".message span")
let notificarion_number=document.querySelector(".notification-head p")
btn.addEventListener("click",function(){
    notificarion_number.remove()
    for(let i=0;i<unread.length;i++){
        unread[i].classList.remove("unread-msg")
        unread[i].classList.remove("red-dot")
    }
})

btn.addEventListener("click",function(){
    for(let i=0;i<red_dot.length;i++){
        red_dot[i].classList.remove("red-dot")
    }
})

let moon=document.querySelector(".moon")
let sun=document.querySelector(".sun")

moon.addEventListener("click",function(){
    moon.classList.toggle("none")
    sun.classList.toggle("none")
})
sun.addEventListener("click",function(){
    moon.classList.toggle("none")
    sun.classList.toggle("none")
})