import React from "react";
import "./contact.css";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_brn5yzb";
const TEMPLATE_ID = "template_70o3ryd";
const USER_ID = "da41nFN87xAXI0GzU";

const Contact = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
            (result) => {
                console.log(result.text);
                Swal.fire({
                    icon: "success",
                    title: "Message Sent Successfully",
                });
            },
            (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: "error",
                    title: "Ooops, something went wrong",
                    text: error.text,
                });
            }
        );
        e.target.reset();
    };
    return (
        <section id="contact">
            <h2 style={{ color: "white" }}>Contact</h2>
            <div className="emailForm">
                <Form onSubmit={handleOnSubmit}>
                    <Form.Field
                        id="form-input-control-email"
                        control={Input}
                        label="Email"
                        name="user_email"
                        placeholder="Email…"
                        required
                        icon="mail"
                        iconPosition="left"
                    />
                    <Form.Field
                        id="form-input-control-last-name"
                        control={Input}
                        label="Name"
                        name="user_name"
                        placeholder="Name…"
                        required
                        icon="user circle"
                        iconPosition="left"
                    />
                    <Form.Field
                        id="form-textarea-control-opinion"
                        control={TextArea}
                        label="Message"
                        name="user_message"
                        placeholder="Message…"
                        required
                    />
                    <Button type="submit" color="blue">
                        Submit
                    </Button>
                </Form>
            </div>
        </section>
    );
};

export default Contact;
