import React, { useState } from "react";
import { Form } from "semantic-ui-react"

function RestaurantForm({ onAddRestaurant }) {

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    cuisineType: '',
    image: '',
    rating: '',
    review: ''
  })
  
    
    function handleChange(event) {
      
      setFormData({
        ...formData,  [event.target.name]: event.target.value
      })
    }
  
    
    function handleSubmit(event) {
      event.preventDefault() 
  
    
      const newRestaurant = {
        name: formData.name,
        location: formData.location,
        cuisineType: formData.cuisineType,
        image: formData.image,
        rating: formData.rating,
        review: formData.review
      }
  
      
      fetch("http://localhost:3003/restaurants", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newRestaurant)
      })
      .then(res => res.json())
      .then(data => {
        onAddRestaurant(data)

      })
    }



return (
    <div className="form">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input 
              required
              label="name" 
              placeholder="restaurant name"
              name="name"
              value={formData.name}
              onChange={handleChange} 
            />
            <Form.Input
              required 
              label="location" 
              placeholder="restaurant location"
              name="location"
              value={formData.location}
              onChange={handleChange} 
            />
            <Form.Input
              required 
              label="cuisine type" 
              placeholder="cuisine type"
              name="cuisineType"
              value={formData.cuisineType}
              onChange={handleChange} 
            />
            <Form.Input
              required 
              label="image" 
              placeholder="paste image url"
              name="image"
              value={formData.image}
              onChange={handleChange} 
            />
            <Form.Input
              required 
              label="rating" 
              placeholder="# out of 10 "
              name="rating"
              value={formData.rating}
              onChange={handleChange} 
              width={2}
            />
            </Form.Group>
            <Form.TextArea
              width={10}
              required
              label="review"
              name="review"
              value={formData.review}
              onChange={handleChange} 
              placeholder="add your review" 
            />
             <Form.Button>submit</Form.Button>
        </Form>
    </div>
  );
}

export default RestaurantForm;
