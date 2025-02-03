import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Error from "./Pages/Error.jsx";
// import WorkshopPage from "./Pages/workshopPage.jsx";
import CTF from "./Pages/CTF.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Partners from "./Pages/Partners.jsx";
import WorkshopRedirect from "./Pages/WorkshopRedirect.jsx";

import Osint from "./Pages/Workshop_Pages/Osint.jsx";
import Forensic from "./Pages/Workshop_Pages/Forensic.jsx";
import Linux from "./Pages/Workshop_Pages/Linux.jsx";
import Boot2Root from "./Pages/Workshop_Pages/Boot2Root.jsx";
import Wireless from "./Pages/wirelessVillage.jsx";

const ReactRouterSetup = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/workshops" element={<WorkshopRedirect />} />
                <Route path="/ctf" element={<CTF />} />
                <Route path="/partners" element={<Partners />} />

                <Route path="/osint" element={<Osint />} />
                <Route path="/forensic" element={<Forensic />} />
                <Route path="/linux" element={<Linux />} />
                <Route path="/boot2root" element={<Boot2Root />} />

                <Route path="/village" element={<Wireless />} />


                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
};

export default ReactRouterSetup;
