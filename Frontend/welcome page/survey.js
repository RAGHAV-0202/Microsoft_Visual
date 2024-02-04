document.addEventListener('DOMContentLoaded', () => {
    var disclaimer =  document.querySelector("img[alt='www.000webhost.com']");
     if(disclaimer){
         disclaimer.remove();
     }  
   });
   

   function onlyOneCheckBox() {
       var checkboxgroup = document.getElementById('checkboxgroup').getElementsByTagName("input")
       var limit = 1;
       for (var i = 0; i < checkboxgroup.length; i++) {
           checkboxgroup[i].onclick = function() {
               var checkedcount = 0;
                   for (var i = 0; i < checkboxgroup.length; i++) {
                   checkedcount += (checkboxgroup[i].checked) ? 1 : 0;
               }
               if (checkedcount > limit) {
                   console.log("You can select maximum of " + limit + " checkbox.");
                   document.getElementById('notvalid').innerHTML="You can select only one from Maths or Bio"
                   this.checked = false;
               }
           }
       } 
    }


   function getClassValue(){
       var CLassValue = document.getElementById('surname').value;
       console.log(CLassValue);
   }

   function getExamValue(){
    var ExamValue = document.getElementById('exam').value;
    console.log(ExamValue);
}

   function myfun(){

    var a = document.getElementsByName('chk');
    var newvar = 0;
    var count;
    for(count=1; count<a.length; count++){
        if(a[count].checked==true){
            newvar= newvar +1;
          }
    }
    
if (newvar>=5){
document.getElementById('notvalid').innerHTML="Please select only 5 Subjects"


return false; }} 
function handleSubmit () {
    const name = document.getElementById('name').value;
    const exam = document.getElementById('exam').value;
    const surname = document.getElementById('surname').value;
 
    sessionStorage.setItem("NAME", name)
    sessionStorage.setItem("SURNAME", surname);
    sessionStorage.setItem("EXAM", exam);

    return;
    
}


