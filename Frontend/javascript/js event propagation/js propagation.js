
window.addEventListener('click' , function() {
    console.log('1');
},true)

document.addEventListener('click' , function() {
    console.log('2');
},true)

document.querySelector('.container').addEventListener('click' , function() {
    console.log('3');
},true)

document.querySelector('.content').addEventListener('click' , function() {
    console.log('4');
},true)

document.querySelector('.button').addEventListener('click' , function(e) {
    e.preventDefault()
    console.log(e.target.innerText = '5 !!!!!!!');
},true)

// uper se niche run hoga , aur agr false aagya to vo skip ho jyga , agr saare skip h to last wala phle run hoyga ..
// agr 1 skip h to 2,3,4,5 .. agr 1,4 skip h to 2,3,5,4,1 .. kyoki 1 phle false aagya to last 4 bcha to phle vo run hoyga..