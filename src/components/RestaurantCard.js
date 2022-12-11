import React from "react";
import { Card, FormDropdown } from "semantic-ui-react";

function RestaurantCard({ restaurants }) {

    const { name, location, ['fast-food']: fastFood, ['cuisine-type']: cuisineType, image, rating } = restaurants

  return (
    <Card>
      <div className="card">
        <div className="image">
            <img src={image} alt="oh no!" height='300' width='300' />
        </div>
        <div className="content">
            <h2>{name}</h2>
        </div>
        <div className="location">
            <h3>{location}</h3>
        </div>
        <div className="cuisine-type">
            <p>{cuisineType}</p>
        </div>
        <div className="rating">
            <p>rating: {rating}/10</p>
        </div>
      </div>
    </Card>
  );
}

export default RestaurantCard;
