

// Render the AppLayout component into the root element
console.log("index.js is running..."); // Debugging

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppLayout from "./AppLayout";

const rootElement = document.getElementById("root");
console.log("Root element:", rootElement); // Debugging

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<AppLayout />);
} else {
    console.error("Root element not found! Check index.html.");
}
