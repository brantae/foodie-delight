import React from "react";
import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react"
import Header from "./Header";
import RestaurantCollection from "./RestaurantCollection";
import RestaurantForm from "./RestaurantForm";
import Search from "./Search";

function Home() {

const [restaurants, setRestaurants] = useState([])
const [search, setSearch] = useState("")

  //fetch restaurant data from server
    useEffect(() => {
      fetch("http://localhost:3003/restaurants")
      .then(r => r.json())
      .then(data => setRestaurants(data))

  }, [])

  //filter restaurant for our search feature
  const restaurantsToDisplay = restaurants.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(search.toLowerCase())
  })

  //add new restaurant to the data
    function handleAddRestaurant(newRestaurant) {
      setRestaurants([...restaurants, newRestaurant])
    }

  //need function to add restaurant to state (form)
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

export default Home;
