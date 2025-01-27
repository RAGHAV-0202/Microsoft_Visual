import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import HomePage from "./Pages/Homepage.jsx"


const ReactRouterSetup = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
            </Routes>
        </Router>
    )
}

export default ReactRouterSetup