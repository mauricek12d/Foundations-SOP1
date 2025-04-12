import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    alert(`Thanks, ${name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="review-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your Email"
          onChange={handleChange}
        />
        <textarea
          name="message"
          value={formData.message}
          placeholder="Your Message"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
