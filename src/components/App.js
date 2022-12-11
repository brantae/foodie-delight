import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Submit from "./Submit";
import Reviews from "./Reviews";
import Error from "./Error";


function App() {
  return (
    <div>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/submit" element={<Submit />}/>
          <Route path="/reviews" element={<Reviews />}/>
          <Route path="/*" element={<Error />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
