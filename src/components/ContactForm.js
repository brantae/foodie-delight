import React, { useState } from "react";
import { Form, Button, Message } from "semantic-ui-react";

function ContactForm() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        cuisineType: '',
        image: '',
        rating: 0
      
      })

    return (
        <div>
            < br/>
            <Form>
                <Form.Group>
                    <Form.Input
                        label="first name"
                        placeholder="first name"
                    />
                        <Form.Input
                        label="last name"
                        placeholder="last name"
                    />
                </Form.Group>
                    <Form.TextArea
                        fluid
                        label="reason for contact"
                        placeholder="add any comments, questions, or concerns :)" 
                    />
                    <Message
                        success
                        header='submit completed'
                        content="your feedback has been received"
                    />
                    <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default ContactForm