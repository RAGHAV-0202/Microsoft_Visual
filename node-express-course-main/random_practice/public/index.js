const form = document.querySelector(".login_form");

async function submitFN(e) {
    e.preventDefault();
    const username = document.querySelector(".username_inp").value;
    const password = document.querySelector(".password_inp").value;
    
    const uploadDATA = {
        "username" : username,
        "password" : password
    }
    const { data } = await axios.post('/main/login',  uploadDATA)
   
    const token = data.token ; 

    localStorage.setItem('token', data.token)  

};

async function get_data(){
    const token = localStorage.getItem('token');
    try {
    let  place = document.querySelector(".space_for_Data")
    const { data } = await axios.get('/main/dashboard', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    place.innerText =  `${data.msg}`;
count = 3;
function countdown() {
    if (count > 0) {
        alert(`Redirecting in ${count} second${count !== 1 ? 's' : ''}`);
        count--;
        setTimeout(countdown, 1000); // Call countdown again after 1 second
    } else {
        window.location.replace("https://www.google.com");        
    }
}

countdown();



  }catch(Err){
    document.querySelector(".space_for_Data").innerText = "NO token"
  }
    
}