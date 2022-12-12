import React, { useState } from "react";
import { Form } from "semantic-ui-react"

function RestaurantForm({ onAddRestaurant }) {

const [formData, setFormData] = useState({
  name: '',
  location: '',
  fastFood: false,
  cuisineType: '',
  image: '',
  rating: ''

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
               
              label="name" 
              placeholder="restaurant name" 
              value={formData.name}
              onChange={handleChange} 
            />
            <Form.Input 
               
              label="location" 
              placeholder="restaurant location"
              value={formData.location}
              onChange={handleChange} 
            />
            <Form.Input 
               
              label="cuisine type" 
              placeholder="cuisine type"
              value={formData.cuisineType}
              onChange={handleChange} 
            />
            <Form.Input 
              label="image" 
              placeholder="paste image url"
              value={formData.image}
              onChange={handleChange} 
            />
            <Form.Input 
              label="rating" 
              placeholder="# out of 10 "
              value={formData.rating}
              onChange={handleChange} 
              width={2}
            />
            
          </Form.Group>
          <Form.Button>submit</Form.Button>
        </Form>
    </div>
  );
}

export default RestaurantForm;
