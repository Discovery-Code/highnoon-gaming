import React, { useState } from "react";
import { ContactContainer, Form } from "./contactStyles";

const initState = {
  firstname: "",
  lastname: "",
  email: "",
  content: "",
};

const Contact = () => {
  const [userInput, setUserInput] = useState(initState);

  function onChange(e) {
    setUserInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const options = {
      method: "POST",
      body: JSON.stringify(userInput),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const request = await fetch("/api/contact-us", options);
    const response = await request.json();

    console.log(response);

    setUserInput(initState);
  }

  return (
    <ContactContainer>
      <p className="hg-logo">HG</p>
      <div className="contact-heading">
        <p>
          HAVE A QUESTION? FILL OUT FORM BELOW OR CONTACT US AT{" "}
          <span>XXX-XXXX</span>
        </p>
      </div>
      <Form onSubmit={onSubmit}>
        <div className="name-inputs">
          <input
            id="firstname"
            type="text"
            name="firstname"
            placeholder="First Name"
            value={userInput.firstname}
            onChange={onChange}
          />

          <input
            id="lastname"
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={userInput.lastname}
            onChange={onChange}
          />
        </div>

        <div className="email-input">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            value={userInput.email}
            onChange={onChange}
          />
        </div>

        <textarea
          id="content"
          name="content"
          rows="5"
          columns="30"
          value={userInput.content}
          onChange={onChange}
        ></textarea>

        <div className="submit-input">
          <input type="submit" />
        </div>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
