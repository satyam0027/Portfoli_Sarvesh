"use client";

import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form default submission
    setStatus("Sending...");
    try {
      const response = await axios.post("https://email-service-ljee.onrender.com/api/v1/sendMail", {
        name: name,
        email: email,
        message: message,
      });

      if (response) {
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
        {/* Hero Section */}
        <section className="bg-gray-800 text-white py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Get in <span className="text-yellow-500"> Touch</span>
          </h1>
          <p className="text-lg">
            Have questions? Collaborations? Or just want to say hi? Contact us today!
          </p>
        </section>

        {/* Contact Form and Business Queries Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              {/* Contact Form */}
              <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                <div className="bg-white text-black p-8 shadow-md rounded-lg">
                  <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
                    Contact Us
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-gray-700 font-medium"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                        rows="5"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                  {status && (
                    <p className="text-center mt-4 text-gray-600">{status}</p>
                  )}
                </div>
              </div>

              {/* Business Queries Section */}
              <div className="w-full lg:w-1/2 px-4">
                <div className="bg-white p-8 shadow-md rounded-lg">
                  <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
                    Business Queries
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-4 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-black text-lg">Email Us</h3>
                        <a
                          href="mailto:sarveshshow@gmail.com"
                          className="text-gray-600 hover:underline"
                        >
                          sarveshshow@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-4 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-black text-lg">Call Us</h3>
                        <p className="text-gray-600">+91 9582732323</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-4 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-black text-lg">Visit Us</h3>
                        <p className="text-gray-600">
                          Office no. 3, G69, G Block, Sector 63, Chotpur, Noida, Uttar Pradesh
                          201301
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
