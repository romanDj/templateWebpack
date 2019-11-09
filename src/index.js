import "./styles/main.scss";
import React from "react";
import ReactDOM from "react-dom";
import Button from "./ui/Button";

/**
 * ui kit
 */
ReactDOM.render((
  <div className="wrapper">
      <p>Hello!</p>
      <Button text="Click me!" click={()=>{
          console.log("click callback");}}/>
  </div>
), document.getElementById('root'));