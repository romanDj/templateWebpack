import React from "react";

function Side(props) {
    //hooks, выбор вкладки, хранить текущую вкладку, и передавать соответствующй набор стилей
    let navbarItems = React.Children.map(props.children, item => {
        return React.cloneElement(item,
            {press: () => props.onClick(item.key) });
    });
    return <ul className={["ui_navbar", (props.position === "top" ? "ui_navbar-top": "ui_navbar-left")].join(" ")}>
        {navbarItems}
    </ul>
}

function SideItem(props) {
    return <li className="ui_navbar_item"
               onClick={() => props.press()}>
        {props.children}</li>
}

export default Side;
export  {Side, SideItem};