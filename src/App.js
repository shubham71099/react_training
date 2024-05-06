import './App.css';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import Login from './Login';
import Services from './Services';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

    <Router>
    <Routes>
          <Route
              path="/"
              element={<Home />}
          ></Route>
          <Route
              path="/services"
              element={<Services />}
          ></Route>
          <Route
              path="/contact"
              element={<Contact />}
          ></Route>
          <Route
              path="/login"
              element={<Login />}
          ></Route>
      </Routes>
    </Router>
    
    <Footer/>

    </div>
  );
}

export default App;
