// src/pages/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-20 pb-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-[#FF8000] mb-6">
        Contact Us
      </h2>
      <p className="text-center text-gray-600 mb-8">
        We'd love to hear from you! Send us a message and we'll get back to you as soon as possible.
      </p>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-xl shadow-md"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8000]"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8000]"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Message</label>
          <textarea
            name="message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8000]"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#FF8000] text-white py-2 rounded-lg hover:bg-orange-600 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
