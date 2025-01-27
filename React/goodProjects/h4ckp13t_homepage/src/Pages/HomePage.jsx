import React from 'react';
import "../CSS/homepage.css";
import "../index.css"
import Navbar from '../Components/navbar.jsx';
// import Footer from '../Components/Footer.jsx';
import { CountDown , Branding } from '../Components/homepageComp.jsx';

const HomePage = ()=>{

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
    

    return (
    
        
        <div className='page_div homepageDiv'>
            <Navbar/>
            <div className='centeredDiv'>
                <div className='homepage_page1'>
                    <Branding/>
                    <div className='homepage_page1_schedule'>
                        <CountDown targetDate="2025-02-02T00:00:00" />
                        <span>
                            <p>BOOT2ROOT CTF : 31th January 2025 </p>
                            <p>Workshop Date : 2 February 2025</p>
                            <p>Panipat Institute of Engineering and Technology</p>
                        </span>
                    </div>

                    <h1 className='floating_text'>
                        CYBER SECURITY
                    </h1>

                    { visible && 
                        <h1 className='floating_text floating_text2'>
                        WORKSHOPS AND MORE
                    </h1>
                    }


                    {/* <div className='page1_objectives floating_text floating_box'> 
                        <div>Web Security</div>
                        <div>Malware Analysis</div>
                        <div>Cryptography</div>
                        <div>Mobile Security</div>
                        <div>Threat Intelligence</div>
                        <div>Infrastructure Security</div>
                    </div> */}

                </div>

                {/* <div className='homepage_page2'>
                    <h4>A conference for and <br></br>by <span className='purple'>Cybersecurity</span> community.</h4>
                    <p>H4CKP13T is a community-driven cybersecurity conference where people from all over the world come together to collaborate, learn, and share their knowledge. We are responsible for organizing an independent H4CKP13T-approved event for PIET.</p>

                    <h3>Show your interest</h3>

                    <span>
                        <div className='page2_options'>
                            <a href='#' className='page2_option'>
                                <span>
                                    <p>01</p>
                                    <img src='https://bsidesdehradun.com/assets/icons/ticket.svg' alt='ticket_img'></img>
                                </span>
                                <h4>Attend Workshop</h4>
                                <p>Tickets for Our CTF 0x01 will go on sale in Late January 2025. We encourage you to purchase your tickets early, as they are expected to sell out quickly.</p>
                            </a>
                            <a href='#' className='page2_option'>
                                <span>
                                    <p>02</p>
                                    <img src='https://bsidesdehradun.com/assets/icons/handshake.svg' alt='ticket_img'></img>
                                </span>
                                <h4>Attend Workshop</h4>
                                <p>Tickets for Our CTF 0x01 will go on sale in Late January 2025. We encourage you to purchase your tickets early, as they are expected to sell out quickly.</p>
                            </a>
                        </div>

                    </span>


                    <div className='second_span_page2'>
                        <h4>Workshops organized by H4CKP13T</h4>
                        <div className='span_page2_lower'>
                            <div className='page2_span_left'>
                                <p>Workshops will be held and will feature a variety of talks, workshops, and panels on a wide range of topics</p>
                            </div>
                            <div className='page2_span_right'>
                                <div className='rainbow_div'>
                                    <div>
                                        <p>Workshops</p>
                                    </div>
                                </div>

                                <div className='rainbow_div smaller_div'>
                                    <div>
                                        <p>Lectures</p>
                                    </div>
                                </div>
                                <div className='rainbow_div smallest_div'>
                                    <div>
                                        <p>Talks</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='homepage_page3'></div> */}

                
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default HomePage ;