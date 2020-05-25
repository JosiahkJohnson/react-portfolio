import React from "react";
import Project from "../project";

//import our pictures for our display projects
import burgerPicture from "../../images/burger-app.png";
import escalationPicture from "../../images/escalationDatabase.png";
import passwordPicture from "../../images/Password Generator.png";
import spaceAppPicture from "../../images/Space Launch App.png"
import weatherPicture from "../../images/WeatherApp.png";
import workPlannerApp from "../../images/Work Planner.png";

//setup our array of project objects
const projects = [{
  image: burgerPicture,
  alt: "Picture of the burger app",
  title: "Eat Da Burger",
  description: "Simple app demonstrating database entering, updating, and deleting.",
  gitHubRepo: "",
  deployed: ""
}, {
  image: escalationPicture,
  alt: "Picture of the escalation database app in action.",
  title: "Escalation Database",
  description: "Demonstrates a more practical usage of database entry and updating in a real-world application.",
  gitHubRepo: "",
  deployed: ""
}, {
  image: passwordPicture,
  alt: "Picture of a simple password generator",
  title: "Secure Password Generator",
  description: "Generates a secure password based on the user specifications automatically.",
  gitHubRepo: "",
  deployed: ""
}, {
  image: spaceAppPicture,
  alt: "Picture of the Space launch application in action",
  title: "Blue Space Launch Watch App",
  description: "Counts down to the next spaceX launch, can also visit previous launches and say how long ago they were.",
  gitHubRepo: "",
  deployed: ""
}, {
  image: weatherPicture,
  alt: "Picture of the weather app in action",
  title: "Weather App",
  description: "Gives the weather conditions in a givin city around the world, and a five day forecast for said city.",
  gitHubRepo: "",
  deployed: ""
}, {
  image: workPlannerApp,
  alt: "Picture of the daily work planner application",
  title: "Work Planner App",
  description: "Helps plan your day by saving tasks to browser local storage and color codes tasks based on what time of day it currently is.",
  gitHubRepo: "",
  deployed: ""
}];

function ProjectPage() {
    return(
        <div>
            {projects.map(project => {
                return (
                    <Project 
                        key = {project.title}
                        title = {project.title}
                        image = {project.image}
                        alt = {project.alt}
                        description = {project.description}
                        githubRepo = {project.githubRepo}
                        deployed = {project.deployed}
                    />
                )
            })}
        </div>
    );
};

export default ProjectPage;