import React from "react";

function Navbar(props) {
    //hooks, выбор вкладки, хранить текущую вкладку, и передавать соответствующй набор стилей
    let navbarItems = React.Children.map(props.children, item => {
        return React.cloneElement(item,
            {press: () => props.onClick(item.key) });
    });
    return <ul className="ui_navbar">{navbarItems}</ul>
}

function NavbarItem(props) {
    return <li className="ui_navbar_item"
               onClick={() => props.press()}>
            {props.children}</li>
}

export default Navbar;
export  {Navbar, NavbarItem};