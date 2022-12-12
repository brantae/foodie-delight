import React, { useState } from "react";
import { Form, Message } from "semantic-ui-react";

function ContactForm() {

    const [formSuccess, setFormSuccess] = useState(false)

    function handleSubmit() {
        setFormSuccess(true)
    }

    return (
        <div className="contact-form">
            < br/>
            <Form success>
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
                     { formSuccess ? <Message
                        success
                        header='submit completed'
                        content="your feedback has been received"
                        /> 
                        : <Message
                        error

                        /> }
  
               
                    <Form.Button onClick={handleSubmit}>
                        Submit
                    </Form.Button>
            </Form>
        </div>
    )
}

export default ContactForm