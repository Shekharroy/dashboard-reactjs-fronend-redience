import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter base="/">
        <App />
    </HashRouter>
  </React.StrictMode>
);
reportWebVitals();
