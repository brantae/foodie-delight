import React from "react";
import { Card, Image } from "semantic-ui-react";

function RestaurantCard({ restaurants }) {

    const { name, location, ['cuisine-type']: cuisineType, image, rating } = restaurants

  return (
    <Card>
        <Image 
            src={image} 
            alt="oh no!" 
            position="center" 
            width='500' 
            height='500'/>
        <Card.Content>
            <Card.Header>
                {name}
            </Card.Header>
            <Card.Meta>
                <span className='location'>{location}</span>
            </Card.Meta>
        </Card.Content>
        <Card.Description>
            {cuisineType}
        </Card.Description>
        <Card.Content extra>
        rating: {rating}/10
        </Card.Content>
    </Card>
  );
}

export default RestaurantCard;
