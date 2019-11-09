import React from "react";

function Button(props) {
    return <button className="ui_button" onClick={props.click}>{props.text}</button>
}

export default Button;