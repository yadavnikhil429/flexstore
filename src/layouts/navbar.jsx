import {NavLink} from "react-router-dom";
import SearchBar from "../components/SearchBar";

const NavBar = ()=> {
    return (
        <nav className="flex items-center justify-between px-6 py-4 ">
        <div className =" font-bold text-[var(--primary-color)]">

           <div>
           <NavLink to="/aboutus" className="text-gray-700 hover:text-[var(--color-accent)] "> About |</NavLink>
            <NavLink to="/" className="text-gray-700 hover:text-[var(--color-accent)]">  Home |</NavLink> 
            <NavLink to="/cart" className="text-gray-700 hover:text-[var(--color-accent)]"> Cart</NavLink>
            </div>
            
        </div>
        </nav>
    )
};

export default NavBar;