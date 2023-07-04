import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/img/foodvilla.png'
import useOnline from "../utils/useOnline";

const Title = () => {
    return (
        <img            
            className="logo"
            alt="logo"
            src= {Logo}
        />
    );
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const isOnline = useOnline();

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                    <li>
                        <Link to={"/cart"}>Cart</Link>
                    </li>
                    <li>
                        <Link to={"/instamart"}>Instamart</Link>
                    </li>
                </ul>
            </div>
            <h1>{isOnline ? "✅" : "🔴"}</h1>
            <button onClick={() => {
                setIsLoggedIn(!isLoggedIn);
            }}>
                { isLoggedIn ? 'Log in' : 'Log out' }
            </button>
        </div>
    );
}

export default Header;