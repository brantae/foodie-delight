import React, { useState } from "react";
import { Form } from "semantic-ui-react"

function RestaurantForm({ onAddRestaurant }) {

const [formData, setFormData] = useState({
  name: '',
  location: '',
  fastFood: false,
  cuisineType: '',
  image: '',
  rating: 0

})

  //need a function to handle form changes
  function handleChange() {
    setFormData({})
  }

  //need a function to handle form submit
  function handleSubmit(event) {
    event.preventDefault() //not really needed bc semantics covers it

    //build new restaurant obj from form data

    //post request to send data to server
  }



  return (
    <div>
        <Form>
          <Form.Group>
            <Form.Input 
               
              label="Name" 
              placeholder="restaurant name..." 
              value={formData.name}
              onChange={handleChange} 
            />
            <Form.Input 
               
              label="Location" 
              placeholder="restaurant location..."
              value={formData.location}
              onChange={handleChange} 
            />
            <Form.Input 
               
              label="Cuisine Type" 
              placeholder="cuisine type..."
              value={formData.cuisineType}
              onChange={handleChange} 
            />
            <Form.Input 
               
              label="Image" 
              placeholder="paste image url..."
              value={formData.image}
              onChange={handleChange} 
            />
            <Form.Input 
              fluid 
              label="Rating" 
              placeholder="rating out of 10..."
              value={formData.rating}
              onChange={handleChange} 
            />
            <Form.Button>Submit</Form.Button>
          </Form.Group>
        </Form>
    </div>
  );
}

export default RestaurantForm;
