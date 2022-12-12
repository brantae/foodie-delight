import React, { useState } from "react";
import { Form, Message } from "semantic-ui-react";

function ContactForm() {

    const [formSuccess, setFormSuccess] = useState(null)
    const [formError, setFormError] = useState(null)

    function handleSubmit() {

        
    }

    return (
        <div className="contact-form">
            < br/>
            <Form success={formSuccess} error={formError}>
                <Form.Group>
                    <Form.Input
                        required
                        label="first name"
                        placeholder="first name"
                    />
                        <Form.Input
                        required
                        label="last name"
                        placeholder="last name"
                    />
                    <Form.Input
                        width={4}
                        required
                        label="email"
                        placeholder="email"
                    />
                </Form.Group>
                    <Form.TextArea
                        width={10}
                        required
                        fluid
                        label="reason for contact"
                        placeholder="add any comments, questions, or concerns :)" 
                    />
                    <Message
                        success
                        header='submit completed'
                        content="your feedback has been received"
                    />
                    <Message
                        error
                        header='submit incomplete'
                        content="all fields must be filled, please try again"
                    />
                    <Form.Button onClick={handleSubmit}>
                        Submit
                    </Form.Button>
            </Form>
        </div>
    )
}

export default ContactForm