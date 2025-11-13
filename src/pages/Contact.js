// src/pages/Contact.js
import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });
  const [animate, setAnimate] = useState(false); // animation state

  useEffect(() => {
    // trigger animation on mount
    setAnimate(true);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ loading: false, success: null, error: "Please fill in all fields." });
      return;
    }

    if (!validateEmail(form.email)) {
      setStatus({ loading: false, success: null, error: "Please enter a valid email address." });
      return;
    }

    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: data.message || "Message sent successfully!", error: null });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ loading: false, success: null, error: data.error || "Something went wrong." });
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: "Network error. Please try again later." });
    }
  };

  return (
    <div className={`contact-section ${animate ? "animate-in" : ""}`}>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Please fill out the form below and we’ll get back to you soon.</p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
          />

          <button type="submit" disabled={status.loading}>
            {status.loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status.error && <p className="error-message">{status.error}</p>}
        {status.success && <p className="success-message">{status.success}</p>}
      </div>
    </div>
  );
};

export default Contact;
