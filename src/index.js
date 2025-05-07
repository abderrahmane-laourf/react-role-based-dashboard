import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./App";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Dashboard isLoggedIn={true} accountType = {"user"} />);