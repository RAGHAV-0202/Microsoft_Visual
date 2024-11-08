import React from "react";


const Section3 = () =>{
    return(
        <div className="HomePageSection Section3">
            <div className="CenteredContent ai jc">
                <div className="section2_heading flex ai jc">
                    <p className="gold">Our Gallery</p>
                    <h3>We Have Done Lots Of Projects <br></br>Let'see Our Gallery</h3>
                </div>

                <div className="images_div flex ">
                    <img className="small_Img" src="https://html.themeori.net/barbex/assets/img/features/gallery-1.jpg" alt="gallery img"></img>
                    <img className="large_Img" src="https://html.themeori.net/barbex/assets/img/features/gallery-2.jpg" alt="gallery img"></img>
                    <img className="small_Img" src="https://html.themeori.net/barbex/assets/img/features/gallery-3.jpg" alt="gallery img"></img>
                    <img className="large_Img" src="https://html.themeori.net/barbex/assets/img/features/gallery-4.jpg" alt="gallery img"></img>
                    <img className="large_Img" src="https://html.themeori.net/barbex/assets/img/features/gallery-5.jpg" alt="gallery img"></img>
                </div>

                <a href="."><p>Read More</p></a>

            </div>
        </div>
    )
}

export default Section3;