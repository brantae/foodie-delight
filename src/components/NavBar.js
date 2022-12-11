import React from "react";
import { Link } from "react-router-dom"

function NavBar() {


  return (
    <nav>
        <Link to="/">Home </Link>
        <Link to="/submit">Submit </Link>
        <Link to="/reviews">Reviews </Link>
    </nav>
  );
}

export default NavBar;
