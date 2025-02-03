// import React from 'react'

function ThreeCards() {
  return (
    <div className="threeCards flex items-center  bg-zinc-100 py-20 px-10 w-full h-[30vw] gap-5">
        <div className="cardContainer lg:w-1/2 h-full md:w-[33%] md:mr-2 lg:mr-0">
            <div className="card w-full h-full min-w-[315px] bg-[#004D43] rounded-2xl flex items-center content-center justify-center font-['Founders'] text-8xl relative" >
                <img className="w-[30%]" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="img"></img>

                

                <p className="font-['Neue'] text-[12px] px-[14px] py-[5px] absolute border-[1px] rounded-4xl bottom-[5%] left-[5%]">&copy; 2019-2022</p>
            </div>
        </div>
        <div className="cardContainer w-1/2 h-full flex flex-row gap-5 md:w-[66%]">
            <div className="card w-1/2 h-[100%] min-w-[315px] bg-[#212121] rounded-2xl flex items-center content-center justify-center font-['Founders'] text-8xl relative md:w-[50%]" >
                <img className="w-[30%]" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="img"></img>
                

                <p className="font-['Neue'] text-[12px] px-[14px] py-[5px] absolute border-[1px] rounded-4xl bottom-[5%] left-[5%]">RATING 5.0 ON CLUTCH</p>
            </div>
            <div className="card w-1/2 h-[100%] min-w-[315px] bg-[#212121] rounded-2xl flex items-center content-center justify-center font-['Founders'] text-8xl relative md:w-[50%]" >
                <img className="w-[30%]" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="img"></img>

                <p className="font-['Neue'] text-[12px] px-[14px] py-[5px] absolute border-[1px] rounded-4xl bottom-[5%] left-[5%]">BOOTCAMP ALUMNI</p>
            </div>
        </div>
    </div>
  )
}

export default ThreeCards