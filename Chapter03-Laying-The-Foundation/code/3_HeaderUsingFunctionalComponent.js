//Assignment: Header component using Functional Component, dempnstrate component composition
import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return (
        <h1 id="title">
            This is Functional component
        </h1>
    );
}

//Component Composition
const HeaderComponent = () => {
    return (
        <div>
            <Title/>
            <h2>This is h2 tag</h2>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root3"));
root.render(<HeaderComponent/>);