//It's a collection of functions
// React is used to write code in efficient eay
import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
console.log(React);

const rootelement = document.getElementById("root");
const root = ReactDom.createRoot(rootelement);

const subheading = <h2>I am a subheading</h2>;
root.render(subheading);
