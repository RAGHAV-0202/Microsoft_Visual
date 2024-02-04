document.addEventListener('DOMContentLoaded', () => {
  var disclaimer =  document.querySelector("img[alt='www.000webhost.com']");
   if(disclaimer){
       disclaimer.remove();
   }  
 });
 
window.addEventListener('load', () => {

    const surname = sessionStorage.getItem('SURNAME');
    const exam = sessionStorage.getItem('EXAM');
    const name = sessionStorage.getItem('NAME');



    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-surname').innerHTML = surname;
    document.getElementById('result-exam').innerHTML = exam;

})

const calcy =() => {
    let english = document.getElementById('english').value;
    let physics = document.getElementById('physics').value;
    let chemistry = document.getElementById('chemistry').value;
    let maths = document.getElementById('maths').value;
    let physical = document.getElementById('physical').value;
    let grade = ""; 
    let result = "";
    let totalmarks = "";

    let totalgrades = parseFloat(english) + parseFloat(physics) + parseFloat(chemistry) + parseFloat(maths) + parseFloat(physical);


  let perc = (totalgrades/500) * 100;
  
  if (perc <=100 && perc>= 33) {
    result = 'Congratulations ! You are Pass';
  }else if (perc <=32 && perc>=01) {
    result = 'Unfortunately you are Fail'
  }else if (perc <=999999999 && perc>=101) {
    result = 'kripya krke sahi se marks dalo'
  }
 

  if(perc <=100 && perc>= 91) {
    grade ='A1';
  }else if (perc <=90 && perc >=81) {
    grade = 'A2';
  }else if (perc <=80 && perc >=71) {
    grade = 'B1';
  }else if (perc <=70 && perc >=61) {
    grade = 'B2';
  }else if (perc <=60 && perc >=51) {
    grade = 'C1';
  }else if (perc <=50 && perc >=41) {
    grade = 'C2';
  }else if (perc <=40 && perc >=33) {
    grade = 'D';
  }else if (perc <=32 && perc >=21) {
    grade = 'E1';
  }else if (perc <=20 && perc >=1) {
    grade = 'E2';
  }else if (perc <=999999999999 && perc >=101) {
    grade = 'oh!!!';
  }
  

document.getElementById('showdata').innerHTML = `Marks: ${totalgrades} out of 500 
<br>

Percentage: ${perc}%. <br>
Grade: ${grade}  <br>
 ${result} `

  }

  

    
/*function handleSubmit () {
    const english = document.getElementById('english').value;
    const physics = document.getElementById('physics').value;
    const chemistry = document.getElementById('chemistry').value;
    const maths= document.getElementById('maths').value;
 const physical= document.getElementById('physical').value;
 
        sessionStorage.setItem("ENGLISH", english)
    sessionStorage.setItem("PHYSICS", physics);
    sessionStorage.setItem("CHEMISTRY", chemistry);
    sessionStorage.setItem("MATHS", maths);
        sessionStorage.setItem("PHYSICAL", physical); 
 
    
    return;
} */