//This file will be used to display different projects to our profile page
import React from "react";
import "./style.css";

function Project({
    image,
    alt,
    title,
    description,
    githubRepo,
    deployed
}){
    return(
        <div className = "border">
            <h2>{title}</h2>
            <br/>
            <img className= "images" src={image} alt={alt}/>
            <br/>
            <p>{description}</p>
            <br/>
            <a className = "links" href={githubRepo} >Repository</a>
            <a className = "links" href={deployed} >Link to demo</a>
        </div>
    );
}

export default Project;