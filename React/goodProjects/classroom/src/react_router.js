import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Error404 from "./Pages/error404";
import LoginPage from "./Pages/Login";
import Dashboard from "./Pages/dashboard";
import RegisterPage from "./Pages/register";
import HomePage from "./Pages/HomePage";
import Room from "./Pages/Room";

const ReactRouterSetup = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/room/:id" element={<Room/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </Router>
    )
}

export default ReactRouterSetup