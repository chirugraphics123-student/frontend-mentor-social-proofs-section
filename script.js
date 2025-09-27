let btn=document.querySelector("button")
btn.addEventListener("click",()=>{
    document.querySelector("body").classList.toggle("darkmode")
    if (btn.textContent=='🌙'){
        btn.textContent='☀️'
        btn.style.backgroundColor="white"
    }
    else{
        btn.textContent='🌙'
        btn.style.backgroundColor="black"
    }
})