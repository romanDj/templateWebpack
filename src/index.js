import "./styles/main.scss";
import React from "react";
import ReactDOM from "react-dom";
import Button from "./ui/Button";
import {Navbar, NavbarItem} from "./ui/Navbar";

/**
 * ui kit
 */
ReactDOM.render((
    <>
        <Navbar onClick={(e)=>{console.log(e)}}>
            <NavbarItem key="page1">Page 1</NavbarItem>
            <NavbarItem key="page2"><a href="https://google.com">Page 2</a></NavbarItem>
        </Navbar>
        <div className="wrapper">
            <div className="ui_kit">
                <p>Hello!</p>
                <Button text="Basic" type="basic" click={()=>{
                    console.log("click callback");}}/>
                <Button text="Secondary" type="secondary" click={()=>{
                    console.log("click callback");}}/>
            </div>
        </div>
    </>
), document.getElementById('root'));