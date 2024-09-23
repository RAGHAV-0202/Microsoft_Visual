import React , {useState} from "react";
import "../css/homepage.css"
import PageTwo from "../components/HomePage_Page2";
// "CustomBold" , "CustomExtraBold" , "CustomStylish" , "retro" , "CustomZeroDot" , "CustomNormal"
import { Link } from "react-router-dom";


const PageOne = () => {
    const [positions, setPositions] = useState({
        ClubNameDiv: { x: 0, y: 0 },
        ClubIntroDiv: { x: 0, y: 0 }
    });

    const dragStartPos = React.useRef({ x: 0, y: 0 });

    const handleDragStart = (e, id) => {
        dragStartPos.current = {
            x: e.clientX - positions[id].x,
            y: e.clientY - positions[id].y
        };
    };

    const handleDrag = (e, id) => {
        if (e.clientX !== 0 && e.clientY !== 0) {
            const newX = e.clientX - dragStartPos.current.x;
            const newY = e.clientY - dragStartPos.current.y;
            setPositions(prev => ({
                ...prev,
                [id]: { x: newX, y: newY }
            }));
        }
    };

    return (
        <div className="HomePage_PageOne">
            <div
                className="ClubNameDiv flex center"
                draggable
                onDragStart={(e) => handleDragStart(e, 'ClubNameDiv')}
                onDrag={(e) => handleDrag(e, 'ClubNameDiv')}
                style={{
                    position: 'relative',
                    left: `${positions.ClubNameDiv.x}px`,
                    top: `${positions.ClubNameDiv.y}px`,
                    cursor: 'move'
                }}
            >
                <h1>H4CKP13T</h1>
            </div>
            <div
                className="ClubIntroDiv flex center"
                draggable
                onDragStart={(e) => handleDragStart(e, 'ClubIntroDiv')}
                onDrag={(e) => handleDrag(e, 'ClubIntroDiv')}
                style={{
                    position: 'relative',
                    left: `${positions.ClubIntroDiv.x}px`,
                    top: `${positions.ClubIntroDiv.y}px`,
                    cursor: 'move'
                }}
            >
                <p>
                    💛⚡️ a community of students who collaborate, learn, and build technical projects
                </p>
            </div>
        </div>
    );
};


const PageThree = ()=>{
    return(
        <div className="HomePage_PageThree">
            <img className="absolute MidRightAbs" src="https://www.purduehackers.com/img/dino.svg" alt="img"></img>
            <img className="absolute TopLeftAbs TopLeftAbsThree" src="https://www.purduehackers.com/img/thisGuy.svg" alt="img"></img>
            <h1>Club</h1>
            <div className="center_div shadow border" >
                <h4>About us</h4>
                <p>H4CKP13T is the technical club of PIET. Our tech club is an enthusiastic forum for students craving for technical exposure. Started by a group of students discussing their GitHub repositories, this forum has now evolved into an independent club striving towards excellence every year.<br></br> Multiple sessions conducted by students on various core domains give engineers a wide exposure on how to approach concepts. On the whole, it's a fun-filled, flexible forum with a group of enthusiastic members always willing to extend help and motivate students on their journey to becoming technical masterminds.</p>
                <a href="google.com" >Join our club</a>
            </div>
        </div>
    )
}

const PageFour = ()=>{
    return(
        <div className="HomePage_PageFour">
            <div className="workshop_div workshop_div1">
                <div className="workshop_div_div workshop_div_div1 flex center">

                    <div className="quote smolBorder flex center">
                        "All things are ready if our minds be so."
                            <span>- William<br></br> Shakespeare</span>
                    </div>

                </div>
                <div className="workshop_div_div workshop_div_div2 flex center">
                    <h1>Workshops</h1>
                </div>
                <div className="workshop_div_div workshop_div_div3 flex center">

                    <div className="quote smolBorder flex center">
                        "weather: rainy and depressing day. A little bit of coffee and coding may help"
                            <span>- Raghav Kapoor</span>
                    </div>

                </div>
            </div>
            <div className="workshop_div workshop_div2">
                <p>Price %10</p>
                <p>H4CKP13T</p>
                <p>Issue #∞</p>
            </div>
            <div className="workshop_div workshop_div3">

                <div className="workshop_info_div smolBorder smolShadow">
                    <h4>Name</h4>
                    <p className="date">Fri 29 Feb 2025</p>
                    <p className="info">FizzyApple12 ran the shaders workshop this year!!! 17 people showed up and made some cool visuals with code</p>

                    <img src="https://www.purduehackers.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fxqpbdhg6%2Fproduction%2Fcc417397e384b59f26f36710076ba75bb5a56526-3000x2000.jpg&w=1920&q=75" alt="img"></img>

                </div>
                <div className="workshop_info_div smolBorder smolShadow">
                    <h4>Name</h4>
                    <p className="date">Fri 29 Feb 2025</p>
                    <p className="info">FizzyApple12 ran the shaders workshop this year!!! 17 people showed up and made some cool visuals with code</p>

                    <img src="https://www.purduehackers.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fxqpbdhg6%2Fproduction%2Fcc417397e384b59f26f36710076ba75bb5a56526-3000x2000.jpg&w=1920&q=75" alt="img"></img>

                </div>
                <div className="workshop_info_div smolBorder smolShadow">
                    <h4>Name</h4>
                    <p className="date">Fri 29 Feb 2025</p>
                    <p className="info">FizzyApple12 ran the shaders workshop this year!!! 17 people showed up and made some cool visuals with code</p>

                    <img src="https://www.purduehackers.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fxqpbdhg6%2Fproduction%2Fcc417397e384b59f26f36710076ba75bb5a56526-3000x2000.jpg&w=1920&q=75" alt="img"></img>

                </div>

            </div>
            {/* <div className="workshop_div workshop_div4"></div> */}
        </div>
    )
}

const PageFive = ()=>{
    return(
        <div className="HomePage_PageFive">
            <h1 style={{color : "white"}}>Members</h1>
        </div>
    )
}

const PageSix = ()=>{
    const [clicked , setClicked] = React.useState("https://www.purduehackers.com/img/sadPlantB1.svg")
    function handleClick(){
        setClicked("https://www.purduehackers.com/img/sadPlantB2.svg")
    }
    return(
        <div className="HomePage_PageSix">
            <img className="absolute TopLeftAbs" src="https://www.purduehackers.com/img/thisGuy.svg" alt="img"></img>
            <img className="absolute MidRightAbs" src="https://www.purduehackers.com/img/dino.svg" alt="img"></img>
            <img className="absolute BottLeftAbs" src="https://www.purduehackers.com/img/floatCat.svg" alt="img"></img>
            <h1>Ready to <br></br>find your <br></br>people?</h1>
            <span>
                <Link className="center border  flex" to="/events">Browse Events</Link>
                <a className="center flex  border" href="https://discord.gg/pdtvXM87">Join Discord</a>
            </span>
            <img onClick={handleClick}  className="plant" alt="plant" src={clicked}></img>
        </div>
    )
}

const Footer = ()=>{
    
    return(
        <div className="HomePage_Footer">
            <p>Made By Raghav</p>
            <span>
                <a href="https://discord.gg/pdtvXM87"><i class="fa-brands fa-discord"></i></a>
                <a href="https://www.instagram.com/h4ck_p13t?igsh=MTIzMmNyeXlzZnN0Mg=="><i class="fa-brands fa-square-instagram"></i></a>
                <a href="/"><i class="fa-brands fa-square-whatsapp"></i></a>
            </span>
        </div>
    )
}

const HomePage = ()=>{
    return(
        <div className="HomePageDiv">
            <PageOne/>
            <PageTwo/>
            <PageThree/>
            <PageFour/>
            <PageFive/>
            <PageSix/>
            <Footer/>
        </div>
    )
}

export default HomePage