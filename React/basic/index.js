
// ReactDOM.render(What to render , where to render);
ReactDOM.render(<h1>Hello guys</h1> , document.querySelector(".root"));

ReactDOM.render(
    <ul>
        <li>Mango</li>
        <li>Banana</li>
    </ul> 
    , document.querySelector(".root")
);

function Navbar(){
    return (
        <div class="navbar">
            <div class="logo"><h1>The Company</h1></div>
            <div class="right">
                <a href="">About</a>
                <a href="">Contact us</a>
                <a href="">Products</a>
                <a href="">Login</a>
            </div>
        </div>
    );
}

ReactDOM.render( <Navbar/> , document.querySelector("body"));