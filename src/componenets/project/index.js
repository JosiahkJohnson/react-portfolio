//This file will be used to display different projects to our profile page
import React from "react";

function Project({
    image,
    alt,
    title,
    description,
    githubRepo,
    deployed
}){
    return(
        <div>
            <h2>{title}</h2>
            <br/>
            <img src={image} alt={alt}/>
            <br/>
            <p>{description}</p>
            <br/>
            <a href={githubRepo}>Repository</a>
            <a href={deployed}>Link to demo</a>
        </div>
    );
}

export default Project;