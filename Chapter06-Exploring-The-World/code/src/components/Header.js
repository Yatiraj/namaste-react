import { useState } from "react";

const Title = () => {
    return (
        <img            
            className="logo"
            alt="logo"
            src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
        />
    );
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
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