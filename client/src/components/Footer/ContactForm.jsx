import React, { useState } from "react";
import "./ContactForm.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const { firstName, lastName, email, message } = formData;

  return (
    <div className="form">
      <h1>Formulaire de contact</h1>
      <form>
        <input
          value={firstName}
          onChange={(e) => updateFormData(e)}
          placeholder="First name"
          type="text"
          name="firstName"
          required
        />
        <input
          value={lastName}
          onChange={(e) => updateFormData(e)}
          placeholder="Last name"
          type="text"
          name="lastName"
          required
        />
        <input
          value={email}
          onChange={(e) => updateFormData(e)}
          placeholder="Email address"
          type="email"
          name="email"
          required
        />
        <input
          value={message}
          onChange={(e) => updateFormData(e)}
          placeholder="Message"
          type="textarea"
          name="message"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
