// import React from "react"
// import ReactDOM from "react-dom";
// ReactDOM.render(What to render , where to render);
// ReactDOM.render(<h1>Hello guys</h1> , document.querySelector(".root"));

// ReactDOM.render(
//     <ul>
//         <li>Mango</li>
//         <li>Banana</li>
//     </ul> 
//     , document.querySelector(".root")
// );

function Navbar(){
    return (
        <div className="navbar">
            <div className="logo"><h1>The Company</h1></div>
            <div className="right">
                <a href="">About</a>
                <a href="">Contact us</a>
                <a href="">Products</a>
                <a href="">Login</a>
            </div>
        </div>
    );
}
// ReactDOM.render( <Navbar/> , document.querySelector("body"));

// we cant render two parents together , we have to wrap all the elements in a div for example , now we are rendering only one parent element instead of many different elements.
const Navvbar = (
    <div className="navbar">
        <div className="logo"><h1>The Company</h1></div>
        <div className="right">
            <a href="">About</a>
            <a href="">Contact us</a>
            <a href="">Products</a>
            <a href="">Login</a>
        </div>
    </div>
);
const formHTML = (
    <div className="box">
        <h4>Enter Username</h4>
        <input type="text" placeholder="Peter Xander"/>
        <h4>Enter Password</h4>
        <input type="password" placeholder="Enter Password"/> 
        <button type="submit">SUBMIT</button>
    </div>
)
// const wrapper = ReactDOM.createRoot(document.querySelector(".wrapper"));
// wrapper.render(Navvbar);

const root = ReactDOM.createRoot(document.querySelector(".root")).render(formHTML);

// ReactDOM.render(formHTML ,document.querySelector(".root") )

// document.querySelector(".root").append(JSON.stringify(formHTML))

