//Header elements created using React.createElement

import React from "react";
import ReactDOM from "react-dom/client";

const header1 = React.createElement(
    "h1",
    {
        id: "header1",
    },
    "Header 1 Using React.createElement"
);

const header2 = React.createElement(
    "h2",
    {
        id: "header2",
    },
    "Header 2"
);

const header3 = React.createElement(
    "h3",
    {
        id: "header3",
    },
    "Header 3"
);

const container = React.createElement(
    "div",
    {
        id: "container",
        className: "title"
    },
    [header1, header2, header3]
);

const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(container);