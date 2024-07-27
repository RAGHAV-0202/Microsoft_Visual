const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

let rotateDegree = 0 ;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = xValue / (window.innerWidth / 2) * 20;

    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy
        let speedz = el.dataset.speedz
        let speedR = el.dataset.rotation

        let val = parseFloat(getComputedStyle(el).left)

        let isInLeft = val < window.innerWidth / 2 ? 1 : -1 

        let zValue = (e.clientX - val) * isInLeft;
        
        el.style.transform = `
        translateX(calc(-50% + ${-xValue * speedx}px)) 
        translateY(calc(-50% + ${-yValue * speedy}px)) 
        rotateY(${rotateDegree * speedR}deg)

        perspective(2300px) translateZ(${zValue * speedz}px)
        `;
    });
});




// window.addEventListener('resize', () => {
//    const main = document.querySelector(".main")
//     if(window.innerWidth >= 725){
//         main.style.maxHeight = `${window.innerWidth * 0.6}px`
//     }else{
//         main.style.maxHeight = `${window.innerWidth * 1.6}px`
//         //  main.style.maxHeight = "100vh"
//     }
// });



let timeline = gsap.timeline();
let el = document.querySelector(".bg-img");

// let array = Array.from(parallax_el).filter((el)=>!el.classList.contains("text"))

timeline.from(el, {
    top: `${el.offsetHeight / 2 + parseFloat(el.dataset.distance)}px`,
    duration: 3.5
});



// let timeline = gsap.timeline()

// Array.from(parallax_el)
//     .filter((el)=> !el.classList.contains("text"))
//     .forEach((el)=>{
//     timeline.from(
//         el, 
//         {
//             top : `${el.offsetHeight/2 + +el.dataset.distance}px`,
//             duration : 2.5 ,
//         },
//         "1"
//     )
// })

