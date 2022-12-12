import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./RestaurantHome";
import ContactForm from "./ContactForm";
import RestaurantReviews from "./RestaurantReviews";
import Error from "./Error";



function App() {
  

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<ContactForm />}/>
          <Route path="/reviews" element={<RestaurantReviews />}/>
          <Route path="/*" element={<Error />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
