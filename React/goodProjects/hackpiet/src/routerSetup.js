import React from "react";
import {BrowserRouter as Router, Route, Switch, Routes} from "react-router-dom"
import HomePage from "./pages/homepage";
import ErrorPage from "./pages/Error";

const ReactRouterSetup = ()=>{
    return(
        <Router>
            
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="*" element = {<ErrorPage/>}/>
            </Routes>
        </Router>
    )
}

export default ReactRouterSetup
