import React from "react";
import { Card, Image } from "semantic-ui-react";

function RestaurantCard({ restaurants }) {

    const { name, location, ['cuisine-type']: cuisineType, image, rating } = restaurants

  return (
    <Card>
        <Image
            className="restaurant-image" 
            centered
            src={image} 
            alt="oh no!"  
            width='500'
            height='500'/>
        <Card.Content>
            <Card.Header>
                {name}
            </Card.Header>
            <Card.Meta 
                className='location'
                textAlign="left">
                {location}
            </Card.Meta>
        </Card.Content>
        <Card.Description
            className="cuisineType"
            textAlign="left">
            {cuisineType}
        </Card.Description>
        <Card.Content extra>
        <b>rating: {rating}/10</b>
        </Card.Content>
    </Card>
  );
}

export default RestaurantCard;
