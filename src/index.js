import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home/Home"; //引入home，不用多指定一層/index.js

ReactDOM.render(
  <Home />,

  document.getElementById("root"),
);
