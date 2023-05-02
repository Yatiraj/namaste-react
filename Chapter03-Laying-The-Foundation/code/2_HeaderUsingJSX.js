// Header using JSX instead of React.createElement

import React from "react";
import ReactDOM from "react-dom/client";

const header1 = <h1 id="header1"> Header using JSX</h1>;
const header2 = <h2 id="header2"> Header 2</h2>;
const header3 = <h3 id="header3"> Header 3</h3>;

const container = <div>{header1}{header2}{header3}</div>

const root = ReactDOM.createRoot(document.getElementById("root2"));
root.render(container);