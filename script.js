const hamburger = document.querySelector("#menuBar")
const closeBtn = document.querySelector("#closeBtn")
const menu = document.querySelector("#menu")
hamburger.addEventListener("click",()=>{
    menu.style.right = "0"
})

closeBtn.addEventListener("click",()=>{
    menu.style.right = "-50%"
})

const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach(n => n.addEventListener("click", ()=>{
    menu.style.right = "-50%"
}))
