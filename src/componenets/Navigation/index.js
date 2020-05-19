import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "../Navbar";
import Home from "../Home";
import Projects from "../projectPage"

function Navigation() {
    return (
        <Router>
            <div>
                <Navbar />
                <Route exact path = "/" component = {Home}/>
                <Route exact path = "/home" component ={Home}/>
                <Route exact path = "/projects" component ={Projects}/>
            </div>
        </Router>
    )
}

export default Navigation;