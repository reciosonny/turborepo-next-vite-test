import ReactDOM from "react-dom/client";
// import React from "react";

import "@repo/ui/globals.css";
// import { Button } from "@ui/components/ui/button.tsx";
import { DialogDemo } from "@ui/components/ui/DialogSample";


// import App from "./App.tsx";
import { ThemeProvider } from "./ThemeProvider.tsx";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
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
    <ThemeProvider>
      <DialogDemo />
    </ThemeProvider>,
  );

  el.appendChild(newElement); //append the new element
});

// ReactDOM.createRoot(document.getElementById("containerElement")!).render(<h1 className="text-2xl">Hello world! this is a nice combo</h1>);
