// import React from "react";
import ReactDOM from "react-dom/client";

import "@repo/ui/globals.css";
// import App from "./App.tsx";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

// Another entry point element
// [...document.getElementsByClassName("containerElement")].forEach((el) => {
//   ReactDOM.createRoot(el).render(
//     <h1 className="text-2xl">
//       Hello world! Rendering other part of the element
//     </h1>,
//   );
// });

// Another entry point element (tiktok sample)
[...document.getElementsByClassName("css-1avy7g5-SectionActionBarContainer")].forEach((el) => {

  const newElement = document.createElement("div");
  ReactDOM.createRoot(newElement).render(
    <div>
      <button onClick={() => alert('you clicked a button')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </div>,
  );

  el.appendChild(newElement); //append the new element
});

// ReactDOM.createRoot(document.getElementById("containerElement")!).render(<h1 className="text-2xl">Hello world! this is a nice combo</h1>);
