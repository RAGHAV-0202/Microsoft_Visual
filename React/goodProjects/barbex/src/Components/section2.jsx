import React from "react";

const Section2 = ()=>{
    const arrow = ">>"
    return(
            <div className="HomePageSection Section2">

                <div className="CenteredContent">
                    <div className="section2_heading flex ai jc">
                        <p className="gold">Services</p>
                        <h3>Popular Services</h3>
                    </div>
                    <div className="section2_services_area flex ai jc">
                        <div className="section2_service flex">
                            <img src="https://html.themeori.net/barbex/assets/img/icon/services-1.png" alt="service"></img>
                            <h5>Trend Haircut</h5>
                            <p>Fusce ornare commodo leo, id maximus ex consequat nec. Cras sed arcu vel eros</p>
                            <a href=".">Read MORE {arrow}</a>
                        </div>
                        <div className="section2_service flex">
                            <img src="https://html.themeori.net/barbex/assets/img/icon/services-2.png" alt="service"></img>
                            <h5>Hair Washing</h5>
                            <p>Fusce ornare commodo leo, id maximus ex consequat nec. Cras sed arcu vel eros</p>
                            <a href=".">Read MORE {arrow}</a>
                        </div>
                            <div className="section2_service flex">
                            <img src="https://html.themeori.net/barbex/assets/img/icon/services-3.png" alt="service"></img>
                            <h5>Hair Coloring</h5>
                            <p>Fusce ornare commodo leo, id maximus ex consequat nec. Cras sed arcu vel eros</p>
                            <a href=".">Read MORE {arrow}</a>
                        </div>
                        <div className="section2_service flex">
                            <img src="https://html.themeori.net/barbex/assets/img/icon/services-4.png" alt="service"></img>
                            <h5>Facial hair Trim</h5>
                            <p>Fusce ornare commodo leo, id maximus ex consequat nec. Cras sed arcu vel eros</p>
                            <a href=".">Read MORE {arrow}</a>
                        </div>
                    </div>

                    
                    <div className="section2_complex flex ">

                        <div className="complex_row1 flex"></div>
                        <div className="complex_row2 flex">
                            <div className="complex_images flex">
                                <img src="https://html.themeori.net/barbex/assets/img/about/about-7.jpg" alt="barber cutting hair"></img>
                                <div className="about_us flex">
                                    <p className="gold">About Us</p>
                                    <h2>The Best Barber Trending Style</h2>
                                    <p>Haircut" is a term used to describe when a person removes the hair on their head. This is done to allow for better</p>
                                    <a href="."><p>Read More</p></a>
                                </div>
                            </div>
                            <div className="complex_stats flex ai jc">
                                <div className="complex_stats_stat flex">
                                    <img src="https://html.themeori.net/barbex/assets/img/icon/9.png" alt="stats"></img>
                                    <span className="flex">
                                        <h2>150k</h2>
                                        <p>Happy Customers</p>
                                    </span>
                                </div>
                                <div className="complex_stats_stat flex">
                                    <img src="https://html.themeori.net/barbex/assets/img/icon/services-1.png" alt="stats"></img>
                                    <span className="flex">
                                        <h2>668</h2>
                                        <p>Customer Haircut</p>
                                    </span>
                                </div>
                                <div className="complex_stats_stat flex">
                                    <img src="https://html.themeori.net/barbex/assets/img/icon/9.png" alt="stats"></img>
                                    <span className="flex">
                                        <h2>38k</h2>
                                        <p>Our Salons</p>
                                    </span>
                                </div>
                                <div className="complex_stats_stat flex">
                                    <img src="https://html.themeori.net/barbex/assets/img/icon/9.png" alt="stats"></img>
                                    <span className="flex">
                                        <h2>20k</h2>
                                        <p>Regular Customers</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
    )
}

export  default Section2