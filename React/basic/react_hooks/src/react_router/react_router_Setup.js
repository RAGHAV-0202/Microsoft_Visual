import React from 'react';
import './App.css';
import Home from "./home"
import About from "./about"
import People from "./people"
import Error from "./error"
import Person from "./person"
// import App from "../../../../Projects/color_gen/src/App"
import {BrowserRouter as Router, Route, Switch, Routes} from "react-router-dom"


const ReactRouterSetup = () =>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/people" element={<People/>}/>
                <Route path="/*" element={<Error/>}/>
                <Route path="/person" element={<Person/>}/>  
                {/* <Route path='/color' element={<App/>}/>       */}
            </Routes>
        </Router>
    )
}

export default ReactRouterSetup