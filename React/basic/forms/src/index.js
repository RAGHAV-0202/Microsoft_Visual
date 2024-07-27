import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Form(props){

  function handleChange(event) {
    props.onChange(event.target);
  }

  return(
    <>
    <div className='input'>
      <input placeholder="FIRST NAME" onChange={handleChange} type='text' name="firstName" value={props.data.firstName} /> 
      <input placeholder="LAST NAME" type='text' onChange={handleChange} name='lastName' value={props.data.lastName} />   
      <input placeholder="EMAIL" type='text' onChange={handleChange} name='email' value={props.data.email} />       
    </div>
    </>
  )
}

function Console(props){
  console.log(props.value)
  return(
    <textarea value={"entered name : " + props.value.firstName + "\n entered last name : " +props.value.lastName + "\n entered email : " + props.value.email} />
  )
}

function App(){

  // const bnaya hmne formData aur setFormData function , formData ko initialise kia as an object with firstName and lastName as an empty string , then in the form component we passed a function named handleFirstName (jo ki hmara app wale component me h ) , now we are in form component , when the inputs are changed a function handleChange is called in which event object is passed ,  now the function which was passed form the app component in the form of props is called inside the handleChange function , and the function in the app component is returned the element event.target

  // const [formData , setFormData] = React.useState({firstName : "" , lastName : ""});
  // // console.log(formData);

  // function handleFirstName(props){
  //   setFormData(prevData=>{
  //     return {
  //       ...prevData , [props.name] : props.value
  //     }
  //   })
  // }


//   const [formData , setFormData] = React.useState({firstName:"" , lastName : "" , email: ""});
  
//   function handleFirstName(props){
//     setFormData(prev=>{
//       return{
//         ...prev , [props.name] : props.value
//       }
//     })
//   }


//   return(
//     <>
//       <Form onChange={handleFirstName} data={FormData} />
//       <Console value={formData}/>  
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <App/>);

}