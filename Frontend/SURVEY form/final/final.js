
window.addEventListener('load', () => {

    const surname = sessionStorage.getItem('SURNAME');
    const exam = sessionStorage.getItem('EXAM');
    const name = sessionStorage.getItem('NAME');
    const en = sessionStorage.getItem('ENGLISH')

    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-surname').innerHTML = surname;
    document.getElementById('result-exam').innerHTML = exam; 
})

window.addEventListener('load', () => {

// submit.js me set kraya final me get 
    const english = sessionStorage.getItem('ENGLISH');
    const physics = sessionStorage.getItem('PHYSICS');
    const chemistry = sessionStorage.getItem('CHEMISTRY');
    const maths = sessionStorage.getItem('MATHS')
    const physical = sessionStorage.getItem('PHYSICAL')

    document.getElementById('result-english').innerHTML = english;
    document.getElementById('result-physics').innerHTML = physics;
    document.getElementById('result-chemistry').innerHTML = chemistry;
    document.getElementById('result-maths').innerHTML = maths;
    document.getElementById('result-physical').innerHTML = physical;

})

var total = sessionStorage.getItem('TOTAL')
document.getElementById('result-total').innerHTML = total;



