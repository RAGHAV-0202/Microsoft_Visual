
import flag from "../resources/flag_logo.gif"
import g1 from "../resources/glitch_1-o.gif";
import g2 from "../resources/glitch_2-o.gif";
import g3 from "../resources/glitch_3-o.gif";
import g4 from "../resources/glitch_4-o.gif";
import "../index.css"
import React from "react";
// import bg from "../resources/bg_design.svg"

function CTF() {

  const [position , setPosition] = React.useState({x: 0 , y : 0})
  React.useEffect(()=>{
    const handleMouseMove = (e) =>{
      const x = e.clientX ;
      const y = e.clientY

      setPosition({x,y})
    }
    window.addEventListener('mousemove' , handleMouseMove) ;
  } , [])


  const [time , setTime] = React.useState({hr : 12 , m : 10})
  React.useEffect(()=>{
    const currentTime = new Date() ;

    const hour = currentTime.getHours();
    const min = currentTime.getMinutes() ;

    setTime({hr : hour , m : min})
    
  } , [])

const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const handleResize = () => {
      const x_width = window.innerWidth;
      if (x_width < 700) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const arrow = '>' ;
  return (
    <div className="ctf w-full relative h-screen flex flex-col items-center justify-center ">

      <img src={flag} style={{padding : "0 20px"}} alt="flag"></img>    
      <a style={{padding : "2vh 3vw" , marginTop : "3vh"}} className="border-[1px] items-center border-zinc-500 block" href="">
        <p className="text-3xl font-['Playwrite']">
          Register Now
        </p>
      </a>

      <div className="w-[fit] text h-fit absolute top-[2%] left-[3%] flex flex-col  ">
        <p className="font-['nothing'] font-thin" > <span className="mr-10 ">{arrow}</span>  Greetings</p>
        <p className="font-['nothing'] font-thin" > <span className="mr-10 ">{arrow}</span>  _</p>
        <p className="font-['nothing'] font-thin" > <span className="mr-10 ">{arrow}</span>  Initializing Sequence...</p>
      </div>


      {
        visible && 

        <div className="w-[fit] text h-fit absolute top-[2%] right-[3%]   ">
            <div className="flex flex-col gap-2 relative">
              <p className="font-['nothing'] text-2xl" >   Tracking Active</p>
              <p className="font-['nothing'] text-2xl" >  {position.x} {position.y}  </p>
              <p className="font-['nothing'] text-2xl" >  {time.hr} : {time.m} </p>

                    <p className="absolute top-[-15%] left-[-20%] ">+</p>
                    <p className="absolute top-[-15%] right-[0%] ">+</p>
                    <p className="absolute bottom-[-25%] left-[-20%] ">+</p>
                    <p className="absolute bottom-[-25%] right-[0%] ">+</p>
            </div>
        </div>
      }



      <img className="w-[17vw] absolute left-[5%] top-[17%] " src={g1} alt="flag"></img>   
      <img className="w-[17vw] absolute left-[13%] bottom-[0%]" src={g2} alt="flag"></img>   
      <img className="w-[10vw] absolute right-[22%] top-[1%]  " src={g3} alt="flag"></img>   
      <img className="w-[17vw] absolute right-[8%] bottom-[0%] " src={g4} alt="flag"></img>   
    </div>
  )
}

export default CTF