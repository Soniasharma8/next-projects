"use client";

import { useState } from "react";
import Layout from "../components/Layout";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success message
    setSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
    // Optionally, clear the form fields here
    e.target.reset();
  };

  return (
    <Layout>
      <div className="min-h-screen bg-black py-16 px-6 text-white relative">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-5xl font-extrabold text-green-500 mb-6"
        >
          📬 Get in Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Feel free to reach out through the form below.
        </motion.p>

        <div className="max-w-3xl mx-auto">
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#22c55e"
            glarePosition="all"
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-md border border-transparent hover:border-green-500 hover:shadow-2xl transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-green-400">
              Send a Message
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none bg-black text-white border-gray-700 transition duration-300"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none bg-black text-white border-gray-700 transition duration-300"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none bg-black text-white border-gray-700 transition duration-300"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-500 text-black py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </Tilt>
        </div>

        {/* Floating Success Message */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-black px-6 py-3 rounded-xl shadow-lg z-50"
            >
              ✅ Message Sent Successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}
