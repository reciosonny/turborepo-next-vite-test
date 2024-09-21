import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// DOM element
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

// Another DOM element injected
[...document.getElementsByClassName('containerElement')].forEach(el => {
    ReactDOM.createRoot(el!).render(<h1 className="text-2xl">Hello world! this is a nice combo</h1>);
});