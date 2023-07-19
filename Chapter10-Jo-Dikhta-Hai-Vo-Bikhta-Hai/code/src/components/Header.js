import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/img/foodX.png'
import useOnline from "../utils/useOnline";

const Title = () => {
    return (
        <img   
            className="w-50 h-20"
            alt="logo"
            src= {Logo}
        />
    );
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const isOnline = useOnline();

    return !isOnline ? (<h1>Please check you internet connection</h1>) : (
        <div className=" fixed flex justify-between items-center px-20  border-b-2 shadow-md font-sans font-medium bg-white w-full top-0 left-0">
            <Title />
            <div>
                <ul className="flex justify-between items-center">
                    <li className="mx-5 px-5 hover:text-orange-500">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="mx-5 px-5 hover:text-orange-500">
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li className="mx-5 px-5 hover:text-orange-500">
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                    <li className="mx-5 px-5 hover:text-orange-500">
                        <Link to={"/cart"}>Cart</Link>
                    </li>
                    <li className="mx-5 px-5 hover:text-orange-500">
                        <Link to={"/instamart"}>Instamart</Link>
                    </li>
                </ul>
            </div>
            <button onClick={() => {
                setIsLoggedIn(!isLoggedIn);
            }}>
                { isLoggedIn ? 'Log in' : 'Log out' }
            </button>
        </div>
    );
}

export default Header;