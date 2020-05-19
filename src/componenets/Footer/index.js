import React from "react";
import "./style.css";

function Footer() {
    return (
        <div className = "row">
            <div className="col-sm-4">
                <a href="https://github.com/JosiahkJohnson" target="_">My Github Profile</a>
            </div>
            <div className="col-sm-4">
                <p className="name">Josiah Johnson</p>
            </div>
            <div className="col-sm-4">
                <a href="https://www.linkedin.com/in/josiah-johnson-a24b90196/" target= "_">My Linkedin</a>
            </div>
        </div>
    );
};

export default Footer;