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
