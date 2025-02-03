import eyesBg from "../Resources/eyesBg.jpg";
import Eye from './Eye';



function Eyes() {
    return (
        <div data-scroll data-scroll-speed=".2" className="w-full h-screen bg-white flex flex-row items-center justify-center" style={{ backgroundImage: `url(${eyesBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Eye/>
        </div>
    );
}

export default Eyes;
