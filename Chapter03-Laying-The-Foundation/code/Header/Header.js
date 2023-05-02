/**
 * Assignment
 * 
 * Create a header component from scratch using Functional component with JSX
 * Add a logo on left
 * Add a seach bar in middle
 * Add User Icon on right
 * Add css to make it look nice
 */
import React from "react";
import ReactDOM from "react-dom/client";
import './style.css';

const HeaderLogo = () => {
    return (
    <div id="header-logo">
        <img src="https://images.pexels.com/lib/api/pexels-white.png"></img>
    </div>
    )
}

const SearchBar = () => {
    return <div id="search-bar"></div>
}

const UserIcon = () => {    
    return (
    <div id="user-icon">
        <img src="https://images.pexels.com/lib/api/pexels-white.png"></img>
    </div>
    )
}

const HeaderComponent = () => {
    return (
        <div id="header">
            <HeaderLogo/>
            <SearchBar/>
            <UserIcon/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root4"));
root.render(<HeaderComponent/>);