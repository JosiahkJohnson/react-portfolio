import React from 'react';
import './App.css';

//component imports
import Header from "./componenets/header";
import Project from "./componenets/project";
import Footer from "./componenets/Footer";
import Navbar from "./componenets/Navigation";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
