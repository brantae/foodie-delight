import React from "react";
import { Card } from "semantic-ui-react";
import ReviewsCard from "./ReviewsCard";

function RestaurantReviews({ restaurants }) {


  const reviews = restaurants.map(restaurant => {
    return <ReviewsCard key={restaurant.id} restaurants={restaurant}/>
})

  return (
    <div>
      <br></br>
    <Card.Group centered>
      {reviews}
    </Card.Group>
    </div>
  );
}

export default RestaurantReviews;
