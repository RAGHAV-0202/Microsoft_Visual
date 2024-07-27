import React, { useCallback } from 'react';
import './App.css';
import {nanoid} from "nanoid"
import data from "./cart_items"

function Header(props){
  return(
    <div className='header'>
      <h5>Cart</h5>
      <span>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="cart-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"></path></svg>

        <p>{props.info.total_quantity}</p>
      </span>
    </div>
  )
}

function Content(props){

  console.log("updated")

  const clearCart = React.useCallback(() => {
    props.setCart([]);
  }, [props.setCart]);

  return(
    <div className="content">
      {props.items.length > 0 ? <h1>YOUR BAG</h1> : <h1>YOUR CART IS EMPTY</h1>}
      <div className='items_in_bag'>        
       {props.items.map((item)=>(
        <Items
          name = {item.name}
          price = {item.price}
          src = {item.src}
          id = {item.id}
          quantity = {item.quantity}
          setCart={props.setCart}
        />
       ))}
      </div>
      { props.items.length > 0 &&  <div className='total'>
        <span>
          <p>Total</p>
          <p className='total_price'>${props.info.total_price}</p> 
        </span>
        <button onClick={clearCart} className='clear'>Clear Cart</button>
      </div>}
    </div>
  )
}
function Items(props){


  const increase = ">" ;
  const decrease = "<" ;


  const decrease_quantity = 
  React.useCallback(()=>{
      props.setCart((prev)=> 
        prev.map((item)=>{
          if(item.id === props.id){
            const qty = item.quantity - 1 ;
            if(qty < 1){
              remove()
            }
            return(
              {...item , quantity : item.quantity - 1} 
            )
          }else{
            return ( item );
          }
        }
        )
      )
  },[props.id , props.setCart])

  const increase_quantity =
    React.useCallback(()=>{
      props.setCart((prev)=> 
        prev.map((item)=> 
          item.id === props.id ? {...item , quantity : item.quantity + 1} : item
        )
      )
    } , [props.id , props.setCart])

  const remove = useCallback (()=> {
    props.setCart((prev)=> prev.filter((item)=> item.id !== props.id));
  } ,[props.id , props.setCart])

  return(
    <div className='item'>
      <div className='img_div'>
        <img src={props.src} alt='item img'></img>
      </div>
      <div className='info_div'>
        <div className='info'>
          <h5 className='item_name'>{props.name}</h5>
          <p className='item_price'>${props.price}</p>
          <button onClick={remove} className='remove'>remove</button>
        </div>
        <div className='buttons'>
          <button onClick={increase_quantity} className='increase'>{increase}</button>
          <p>{props.quantity}</p>
          <button onClick={decrease_quantity} className='decrease'>{decrease}</button>
        </div>
      </div>
    </div>
  )
}
function App() {

  const items = data ;
  const [cart , setCart] = React.useState([]);
  const [info , setInfo] = React.useState({})
  

  React.useEffect(()=>{
    let qty = 0 ; 
    let price = 0 ; 
    cart.map((item)=>{
      qty += item.quantity;
      price += item.quantity * item.price;
    })
    setInfo({
      total_quantity : qty , total_price : price.toFixed(2) 
    })
  }, [cart])
  
  function populate(){
    const temp = [];
    // let total_price = 0;
    items.map((item)=>{
      temp.push( {
        key : item.key ,
        name : item.name ,
        price : item.price ,
        src : item.src ,
        id : nanoid() , 
        quantity : 2 ,
      })
    })
    setCart(temp);
  }

  React.useEffect(()=>{
    populate();
  } , [])

  // console.log(cart);
  return (
    <div className="App">
      <Header info={info}/>
      <Content info={info} setCart={setCart} items={cart}/>
    </div>
  );
}

export default App;
