import React, { useEffect } from "react"


const UseRefBasics = () =>{

    const refContainer = React.useRef(null)
    const divContainer = React.useRef(null)

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(refContainer.current.value)
        // console.log(divContainer.current)

    }
    useEffect(()=>{
        console.log(refContainer.current)
        refContainer.current.focus()
    })
    
    return <>
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <input type="text" ref={refContainer} />
                <button type="submit">Submit</button>
            </div>
        </form>
        <div ref={divContainer}>Hello world</div>
    </>;
}

export default UseRefBasics; 