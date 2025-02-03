import React from 'react';
import "../CSS/navbar.css";
import menu from "../resources/menu1.svg"
import logo from "../resources/logo.png"

const Navbar = () =>{

    const [navbar_style , set_navbar_style] = React.useState({top : "0"})

    const [visible , setVisible] = React.useState(true)

    const [lastScrollY, setLastScrollY] = React.useState(0);

    React.useEffect(()=>{
        if(visible === true){
            set_navbar_style({top : "0px"})
        }else{
            set_navbar_style({top : "-200px"})
        }
    } , [visible])

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 500) {
            setVisible(false);
        } else {
            setVisible(true);
        }
        setLastScrollY(window.scrollY);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    const [extended, setExtended] = React.useState(false);
    const [mobile , setMobile] = React.useState(false)

    React.useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 768) {
                setMobile(true);
            } else {
                setMobile(false);
                setExtended(false);
            }
        };

        handleResize()
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function handleExtension(){
        setExtended(!extended)
        console.log(extended)
    }

    return(
        <div style={navbar_style} className={`navbar ${extended ? "extended" : "notExtended"}`}>
            <div className='normal'>
                <a href='/' className='navbar_logo'>
                    <img src={logo} alt="logo" />
                </a>

                {
                    !mobile &&

                    <>
                    
                        <div className='navbar_links'>
                            {/* <button>Conference</button> */}
                            <a href='/workshops' >Workshops</a>
                            {/* <button>Village</button> */}
                            <a href='/ctf'>CTF</a>
                            <a href='/village'>Village</a>
                            <a href='/partners'>Partners</a>
                        </div>

                        <div className='navbar_ticket'>
                            <a href='https://chat.whatsapp.com/FQ3BoGFN6Yd2uuKhjjCzYw'>Join Us</a>
                        </div>
                    
                    </>


                }

                {
                    mobile &&
                    <button>
                        <img style={{width : "30px" , marginRight : "40px"}}  src={menu} alt=':' onClick={handleExtension}></img>
                    </button>
                }



   
            </div>
            {
                extended && 
                
                <div className='extended flex flex-col  '>
                    <div className='navbar_links '>
                        {/* <button>Conference</button> */}
                        <a href='/workshops' >Workshops</a>
                        {/* <button>Village</button> */}
                        <a href='/ctf'>CTF</a>
                        <a href='/village'>Village</a>
                        <a href='/partners'>Partners</a>
                        
                        <a className='noBorder' href='https://chat.whatsapp.com/FQ3BoGFN6Yd2uuKhjjCzYw'>Join Us</a>
                    </div>
                </div>

            }
        </div>
    )
}


export default Navbar