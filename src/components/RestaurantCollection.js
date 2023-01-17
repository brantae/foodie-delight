import React from "react";
import { Card } from "semantic-ui-react"
import RestaurantCard from "./RestaurantCard";

function RestaurantCollection({ restaurants }) {

    const cards = restaurants.map(restaurant => {
        return <RestaurantCard key={restaurant.id} restaurants={restaurant}/>
    })

    return (
        <div>
            <Card.Group itemsPerRow={2}>
                {cards}
            </Card.Group>
        </div>
    )
}

export default RestaurantCollection