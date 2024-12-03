"use client";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-xl w-full p-8 bg-white rounded-xl shadow-xl">
        <h2 className="text-4xl font-semibold text-center text-primary mb-8">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-lg font-medium">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition"
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-lg font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-lg font-medium">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-lg font-medium">Message</label>
            <textarea
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-6 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition"
              placeholder="Write your message here"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-primary text-white rounded-lg text-lg hover:bg-secondary transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-12 text-center text-gray-600">
        <h3 className="text-2xl font-semibold">Or Reach Us Directly:</h3>
        <div className="space-y-4 mt-6">
          <div className="flex items-center justify-center space-x-3">
            <FaPhoneAlt className="text-secondary" size={24} />
            <span className="text-lg">021-38892198 Ext. 9933</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <FaEnvelope className="text-secondary" size={24} />
            <span className="text-lg">contact@iqrasweethome.com</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <FaMapMarkerAlt className="text-secondary" size={24} />
            <span className="text-lg">Iqra Sweet Home, Phase 1, Karachi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
