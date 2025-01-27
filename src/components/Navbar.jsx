import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { NavLink, useLocation } from "react-router-dom";

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
                        <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold underline' : ''}>Home</NavLink>
                        <NavLink to='/statistics' className={({ isActive }) => isActive ? 'font-bold underline' : ''}>Statistics</NavLink>
                        <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'font-bold underline' : ''}>Dashboard</NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'font-bold underline' : ''}>About</NavLink>
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
            </div>) : (<div className="bg-neutral-200"><div className="container mx-auto navbar">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center">
                    <ul className="flex gap-4">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold underline text-purple-400' : ''}>Home</NavLink>
                        <NavLink to='/statistics' className={({ isActive }) => isActive ? 'font-bold underline text-purple-400' : ''}>Statistics</NavLink>
                        <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'font-bold underline text-purple-400' : ''}>Dashboard</NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'font-bold underline text-purple-400' : ''}>About</NavLink>
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
            </div></div>)}

        </>
    );
};

export default Navbar;