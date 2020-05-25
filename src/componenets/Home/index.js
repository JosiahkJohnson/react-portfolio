import React from "react";
import "./style.css";
import picture from "./picture.jpg"

function Home() {
    return (
        <div>
            <h4>About Me:</h4>
            <br/>
            <img src={picture} className = "profile-picture" alt="profile"/>
            <p>My name's Josiah. I'm 27 years old. I'm looking to get into web-development</p>
            <p>I've worked with computers for as long as I can remember; my dad has always worked in the tech field, so I leared some
            computing even in a young age. I even have some experience on the hardware side of things, in 2012,
              I built my own computer.</p>

            <p>I also like rocket science, have an intrest in investing and finance, and occasionally like to go camping. I have experience in
            several different programing languages, and learn new ones fairly quickly.
            </p>
            <br/>
            <p className="email">Contact me at josiahkj123@gmail.com</p>
            <p className="phone">Phone #: 214-499-8252</p>
        </div>
    );
};

export default Home;
