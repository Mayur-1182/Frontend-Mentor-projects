let rating_page=document.querySelector(".rating-page")
let thanks_page=document.querySelector(".thanks-page")
let submit=document.querySelector(".submit-btn")
let rating_number=document.querySelectorAll(".rating-number")
let selected_rate_num=document.querySelector(".selected-rate-num")

for(let i=0;i<rating_number.length;i++){
    rating_number[i].addEventListener("click",()=>{
        selected_rate_num.innerHTML=i+1
        rating_number[i].style.backgroundColor="var(--orange)"
        rating_number[i].style.color="var(--White)"
    })
}
submit.addEventListener("click",()=>{
    rating_page.classList.add("none")
    thanks_page.classList.remove("none")
})