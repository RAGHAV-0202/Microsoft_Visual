// import React from 'react'

import Eye from "./Eye"

function Eye2() {
  return (
    <div className="w-full h-[100vh] bg-[#CDEA68] flex flex-col items-center justify-center py-10">

        <h1 className="font-['Founders'] text-[8vw] uppercase text-black leading-[0.2]">Ready</h1>
        <h1 className="font-['Founders'] text-[8vw] uppercase text-black leading-[0.2">to start</h1>
        <h1 className="font-['Founders'] text-[8vw] uppercase text-black leading-[0.2]">the project ? </h1>

        <div id="eyediv" className="pt-5">
            <Eye/>
        </div>

    </div>
  )
}

export default Eye2