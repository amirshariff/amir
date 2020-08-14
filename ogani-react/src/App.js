import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import {BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Header/>
    </Router>
      
    </div>
  );
}

export default App;
