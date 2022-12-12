import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./RestaurantHome";
import ContactForm from "./ContactForm";
import RestaurantReviews from "./RestaurantReviews";
import Error from "./Error";



function App() {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch("http://localhost:3003/restaurants")
    .then(r => r.json())
    .then(data => setRestaurants(data))

}, [])
  

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home restaurants={restaurants} setRestaurants={setRestaurants}/>}/>
          <Route path="/contact" element={<ContactForm />}/>
          <Route path="/reviews" element={<RestaurantReviews restaurants={restaurants}/>}/>
          <Route path="/*" element={<Error />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
