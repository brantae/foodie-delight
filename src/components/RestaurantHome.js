import React from "react";
import { useState } from "react";
import { Container } from "semantic-ui-react"
import Header from "./Header";
import RestaurantCollection from "./RestaurantCollection";
import RestaurantForm from "./RestaurantForm";
import Search from "./Search";

function RestaurantHome({ restaurants, setRestaurants }) {

const [search, setSearch] = useState("")


  //filter restaurant for our search feature
  const restaurantsToDisplay = restaurants.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(search.toLowerCase())
  })

  //add new restaurant to the data
    function handleAddRestaurant(newRestaurant) {
      setRestaurants([newRestaurant, ...restaurants])
    }


  return (
    <div>
      <Container>
        <Header />
        <br />
        <Search onChangeSearch={setSearch} search={search}/>
        <br />
        <RestaurantForm onAddRestaurant={handleAddRestaurant}/>
        <br />
        <RestaurantCollection restaurants={restaurantsToDisplay}/>
      </Container>
    </div>
  );
}

export default RestaurantHome;
