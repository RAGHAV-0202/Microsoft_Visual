import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Error from "./Pages/Error.jsx";
import WorkshopPage from "./Pages/workshopPage.jsx";
import CTF from "./Pages/CTF.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Partners from "./Pages/Partners.jsx";

const ReactRouterSetup = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/workshop" element={<WorkshopPage />} />
                <Route path="/ctf" element={<CTF />} />
                <Route path="/partners" element={<Partners />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
};

export default ReactRouterSetup;
