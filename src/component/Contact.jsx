import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Step 1: import navigate
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Contact.css";
import "../App.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    query: "",
  });

  const navigate = useNavigate(); // ✅ Step 2: create navigate function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ Prevent page reload

    // You can send form data here (API call, etc.)
    console.log("Form submitted:", formData);

    alert("Form submitted successfully!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      age: "",
      query: "",
    });

    // ✅ Step 3: Redirect to Home page
    navigate("/Home");
  };

  return (
    <div className="contact fw-bold">
      <Form className="form" onSubmit={handleSubmit}>
        <h2 className="title" data-aos="fade-down">
          Contact
        </h2>

        <Form.Group>
          <Form.Label className="label" data-aos="fade-right">
            Enter your full name:
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            data-aos="fade-left"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="label" data-aos="fade-right">
            Enter your email address:
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            data-aos="fade-left"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="label" data-aos="fade-right">
            Enter your age:
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            data-aos="fade-left"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="label" data-aos="fade-right">
            Enter your query:
          </Form.Label>
          <div className="form-floating" data-aos="fade-left">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              name="query"
              value={formData.query}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </Form.Group>

        <br />

        <Button
          variant="primary"
          className="btn w-50 button-submit text-center"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
