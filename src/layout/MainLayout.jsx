import { Outlet, useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Mainlayout = () => {
    const location = useLocation();
    return (
        <div className="flex flex-col justify-between min-h-screen bg-base-200 relative">
            {(location.pathname === '/') ? <Banner /> : <div className="sticky top-0">
                <Navbar />
            </div>}
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Mainlayout;