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
            <NavbarItem key="page1">Главная</NavbarItem>
            <NavbarItem key="page2">Заклинания</NavbarItem>
            <NavbarItem key="page3">Войти</NavbarItem>
            <NavbarItem key="page4">Выйти</NavbarItem>
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