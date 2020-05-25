import React from 'react';
import './App.css';

//component imports
import Header from "./componenets/header";
import Footer from "./componenets/Footer";
import Navbar from "./componenets/Navbar";
import Navigation from "./componenets/Navigation"


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header>
          <Navbar />
        </Header>
        <Navigation />
        <Footer />
      </div>
    </div>
  );
}

export default App;
