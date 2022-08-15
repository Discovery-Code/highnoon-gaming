import React from "react";
import { ContactContainer, Form } from "./contactStyles";

const Contact = () => {
  return (
    <ContactContainer>
      <p className="hg-logo">HG</p>
      <div className="contact-heading">
        <p>
          HAVE A QUESTION? FILL OUT FORM BELOW OR CONTACT US AT{" "}
          <span>XXX-XXXX</span>
        </p>
      </div>
      <Form action="">
        <div className="name-inputs">
          <input
            id="firstname"
            type="text"
            name="firstname"
            placeholder="First Name"
          />

          <input
            id="lastname"
            type="text"
            name="lastname"
            placeholder="Last Name"
          />
        </div>

        <div className="email-input">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
          />
        </div>

        <textarea name="textarea" rows="5" columns="30"></textarea>

        <div className="submit-input">
          <input type="submit" />
        </div>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
