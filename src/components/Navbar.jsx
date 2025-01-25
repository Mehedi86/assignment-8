import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    return (
        <>
            {(location.pathname === '/') ? (<div className="container mx-auto navbar">
                <div className="navbar-start text-white">
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center text-white">
                    <ul className="flex gap-4">
                        <Link to='/'>Home</Link>
                        <li><a>Statistics</a></li>
                        <Link to='/dashboard'>Dashboard</Link>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle bg-white mr-2">
                        <IoCartOutline size={20} />
                    </button>
                    <button className="btn btn-ghost btn-circle bg-white mr-2">
                        <CiHeart size={20} />
                    </button>
                </div>
            </div>) : (<div className="container mx-auto navbar">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center">
                    <ul className="flex gap-4">
                    <Link to='/'>Home</Link>
                        <li><a>Statistics</a></li>
                        <Link to='/dashboard'>Dashboard</Link>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle bg-white mr-2">
                        <IoCartOutline size={20} />
                    </button>
                    <button className="btn btn-ghost btn-circle bg-white mr-2">
                        <CiHeart size={20} />
                    </button>
                </div>
            </div>)}

        </>
    );
};

export default Navbar;