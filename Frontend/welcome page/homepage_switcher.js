const parallax_btn = document.querySelector(".parallax_page")
const normal_btn = document.querySelector(".normal_page")

const normal_page = document.querySelector(".normal_homepage")
const parallax_page = document.querySelector(".parallax_homepage")


function changeToParallax(){
    console.log("changed to parallax")
    parallax_btn.classList.add("active_btn")
    normal_btn.classList.remove("active_btn")

    normal_page.style.display = "none";
    parallax_page.style.display = "block" ;
}

function changeToNormal(){
    console.log("changed to normal")
    normal_btn.classList.add("active_btn")
    parallax_btn.classList.remove("active_btn")

    parallax_page.style.display = "none";
    normal_page.style.display = "block" ;
}