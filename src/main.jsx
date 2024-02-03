import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/style.css";
import "./style/google-icons.css";
import "tenoxui/dist/css/lib.css";
import "tenoxui/dist/css/tui.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
