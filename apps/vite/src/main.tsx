import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Another entry point element
[...document.getElementsByClassName("containerElement")].forEach((el) => {
  ReactDOM.createRoot(el).render(
    <h1 className="text-2xl">
      Hello world! Rendering other part of the element
    </h1>,
  );
});

// Another entry point element
[...document.getElementsByClassName("reelActions")].forEach((el) => {
  ReactDOM.createRoot(el).render(
    <div>
      <h1 className="text-2xl">Reel actions</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </div>,
  );
});

// ReactDOM.createRoot(document.getElementById("containerElement")!).render(<h1 className="text-2xl">Hello world! this is a nice combo</h1>);
