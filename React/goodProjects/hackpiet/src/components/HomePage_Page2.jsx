import React , {useState} from "react";



const PageTwoNavBar = ()=>{
    return(
        <div className="PageTwoTopNavBar shadow border">
            <div className="PageTwoTopNavBarLeft flex center">
                <span className="Dot"></span>
                <span className="Dot"></span>
                <span className="Dot"></span>
            </div>
            <div className="PageTwoTopNavBarRight flex center">
                <button className="PageTwoNavBarButtons flex center smolBorder smolShadow bgDisabled">
                    <i class="fa-regular fa-envelope"></i>
                </button>
                <button className="PageTwoNavBarButtons flex center smolBorder smolShadow bgPink ">
                    <i class="fa-regular fa-messages"></i>
                </button>
                <button className="PageTwoNavBarButtons flex center smolBorder smolShadow bgYellow">
                    <i class="fa-regular fa-circle-radiation"></i>
                </button>
            </div>
        </div>
    )
}

const Messages = ({ id, heading, text, onClick, z }) => {
    return (
        <div onClick={() => onClick({ id, z })} className="message" style={{ cursor: 'pointer' }}>
            <div className="left flex center">
                <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="right flex">
                <p>{heading}</p>
                <h6>{text}</h6>
            </div>
        </div>
    );
};

const PageTwo = () => {
    const [openMessages, setOpenMessages] = useState([{
        "id": "one",
        "z": 1,
        "position": {
            "top": "3%",
            "left": "21%"
        }
    }]);
    
    const dragRef = React.useRef(null);

    const messageDetails = {
        one: {
            from: "Raghav@hackpiet.com",
            subject: "an invitation",
            body: `<br>Dear Hacker,<br><br>
            Shipping a technical project that you’re proud of is among the most validating and rewarding things you can do as a young person. College is the best time in our lives to do it—but actually doing it is soooooooooo hard. You have to find something you’d enjoy building, feels unique, and allows you to learn new things, but not too many new things, otherwise you’ll give up. Then, you have to find the time and motivation to actually build the thing—all while being pulled in every direction by academic and social obligations.<br><br>
            It’s no surprise most students simply don’t bother, & graduate never having made something they’re proud of.<br><br>
            H4CKP13T is a Club full of radically kind, inclusive, and weirdo creative people who learn new things & ship projects together.<br><br>
            Many of us grew up never having found our people until we were united by our shared love for making things. Via our community, workshops, and Hack Nights, we want to create an environment where you can find your people too, and make magic with them. ✨<br><br>
            If you go to Purdue—whether you've never written code before, or are highly technical, whether you're an art major or a CS major—we invite you to join our universe.<br><br>
            See you soon,<br><br>
            <strong>💛⚡️ The H4CKP13T Club</strong>`,

            color : "#FDE047"
        },
        two: {
            from: "boss@company.com",
            subject: "***IMPORTANT!!!***",
            body: "<br>You're fired.",
            color : "#93C5FD"
        },
        three: {
            from: "unknown@anon.com",
            subject: "Hello There.",
            body: `
<pre>
( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°) 
───█───▄▀█▀▀█▀▄▄───▐█──────▄▀█▀▀█▀▄▄ 
──█───▀─▐▌──▐▌─▀▀──▐█──────▀─▐──▐▌─█▀
─▐▌──────▀▄▄▀──────▐█▄▄─────▀▄▄▀──▐▌ 
─█────────────────────▀█─────────█ 
▐█─────────────────────█▌─────────█ 
▐█─────────────────────█▌─────────█ 
─█───────────────█▄───▄█─────────█ 
─▐▌───────────────▀███▀───────────▐▌ 
──█──────────▀▄───────────▄▀─────█ 
───█───────────▀▄▄▄▄▄▄▄▄▄▀──────█ 
( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)
</pre>`,

            color : "#F9A8D4"
        },
        four: {
            from: "Coderrr@coding.com",
            subject: "aawww aawaa awawa",
            body: "I just wanted to say I love Coding!",
            color : "#BEF264"
        },
        five: {
            from: "mcdonalds@promo.com",
            subject: "Want a Free Burgir?",
            body: "Go to College Cafe ask for a Burger ,and say HackPiet to get it for free !!!",
            color : "#FDBA74"
        }
    };

    
    const getRandomPosition = () => {
        const top = Math.floor(Math.random() * 50);  
        const left = Math.floor(Math.random() * 50); 
        return { top: `${top}%`, left: `${left}%` };
    };

    const toggleMessage = ({ id, z }) => {
        setOpenMessages((prevState) => {
            const messageExists = prevState.some(msg => msg.id === id);
            if (messageExists) {
                return prevState.filter((msg) => msg.id !== id);
            } else {
                return [...prevState, { id, z, position: getRandomPosition() }];
            }
        });
    };

    const closeMessage = (id) => {
        setOpenMessages((prevState) => prevState.filter((msg) => msg.id !== id));
    };
    
    const handleDragStart = (e, id) => {
        const messageElement = e.target.closest('.messageContent');
        const rect = messageElement.getBoundingClientRect();
        const parentRect = messageElement.offsetParent.getBoundingClientRect();

        dragRef.current = {
            id,
            offsetX: e.clientX - rect.left,
            offsetY: e.clientY - rect.top,
            parentOffsetX: parentRect.left,
            parentOffsetY: parentRect.top
        };

        // Create a transparent drag image
        const dragImage = document.createElement('div');
        dragImage.style.opacity = '0';
        document.body.appendChild(dragImage);
        e.dataTransfer.setDragImage(dragImage, 0, 0);
        setTimeout(() => document.body.removeChild(dragImage), 0);
    };

    const handleDrag = (e) => {
        if (dragRef.current && e.clientX && e.clientY) {
            const { id, offsetX, offsetY, parentOffsetX, parentOffsetY } = dragRef.current;
            const newLeft = ((e.clientX - offsetX - parentOffsetX) / window.innerWidth) * 100;
            const newTop = ((e.clientY - offsetY - parentOffsetY) / window.innerHeight) * 100;

            setOpenMessages(prevMessages => prevMessages.map(msg => 
                msg.id === id ? {...msg, position: {top: `${newTop}%`, left: `${newLeft}%`}} : msg
            ));
        }
    };

    const handleDragEnd = () => {
        dragRef.current = null;
    }
    return (
        <div className="HomePage_PageTwo">
            <div className="PageTwoTop flex center">
                <PageTwoNavBar />
            </div>
            <div className="PageTwoBottom">
                <div className="PageTwoBottomLeft" 
                     onDragOver={(e) => e.preventDefault()}
                     onDrop={handleDragEnd}>
                    {openMessages.length > 0 ? (
                        openMessages.map(({ id, z, position }) => (
                            <div 
                                key={id} 
                                style={{ 
                                    zIndex: z, 
                                    position: 'absolute', 
                                    ...position,
                                    cursor: 'move'
                                }} 
                                className="messageContent border smolShadow"
                                draggable="true"
                                onDragStart={(e) => handleDragStart(e, id)}
                                onDrag={handleDrag}
                                onDragEnd={handleDragEnd}
                            >
                                <div style={{backgroundColor: messageDetails[id].color}} className="messageNavBar">
                                    <div className="messageNavBarLeft flex center">
                                        <i 
                                            className="fa-solid fa-xmark" 
                                            style={{ cursor: 'pointer' }} 
                                            onClick={() => closeMessage(id)}  
                                        ></i>
                                    </div>
                                    <div className="messageNavBarRight"></div>
                                </div>
                                <h3>From: {messageDetails[id].from}</h3>
                                <h4>Subject: {messageDetails[id].subject}</h4>
                                <p dangerouslySetInnerHTML={{ __html: messageDetails[id].body }}></p>
                            </div>
                        ))
                    ) : (
                        <p></p>
                    )}
                </div>

                <div className="PageTwoBottomRight flex">
                    <div className="PageTwoBottomRightOptionsDiv border smolShadow">
                        <Messages
                            heading="H4CKP13T Hackers"
                            text="an invitation"
                            id="one"
                            z={1}
                            onClick={toggleMessage}
                        />
                        <Messages
                            heading="Your Boss"
                            text="***IMPORTANT!!!***"
                            id="two"
                            z={2}
                            onClick={toggleMessage}
                        />
                        <Messages
                            heading="unknown"
                            text="Hello There."
                            id="three"
                            z={3}
                            onClick={toggleMessage}
                        />
                        <Messages
                            heading="Coderrr@coding.com"
                            text="aawww aawaa awawa"
                            id="four"
                            z={4}
                            onClick={toggleMessage}
                        />
                        <Messages
                            heading="McDonald's"
                            text="Want a Free Burgir?"
                            id="five"
                            z={5}
                            onClick={toggleMessage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PageTwo