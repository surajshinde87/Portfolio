import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Sending your message...", { id: "email-toast" });

    try {
      // 1️⃣ Send email to yourself
      await emailjs.send(
        "service_8vkwpdx",
        "template_fwralaq",
        {
          to_name: formData.name,
          to_email: formData.email,
          message: formData.message,
        },
        "hR0oGdKBUyxSWWiGd"
      );

      // 2️⃣ Send auto-reply to user
      await emailjs.send(
        "service_8vkwpdx",
        "template_oddpq1l",
        {
          to_name: formData.name,
          to_email: formData.email,
          reply_to: "surajpshinde8767@gmail.com", // your email
        },
        "hR0oGdKBUyxSWWiGd"
      );

      toast.success("Message sent and auto-reply delivered!", {
        id: "email-toast",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send the message. Try again!", { id: "email-toast" });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
    >
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind or just want to say hi? Drop me a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer">
              <Mail className="w-7 h-7 text-blue-500" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  surajpshinde8767@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer">
              <Phone className="w-7 h-7 text-green-500" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +91 8767027809
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/918767027809"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer"
            >
              <MessageSquare className="w-7 h-7 text-green-500" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  WhatsApp
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Chat with me directly on WhatsApp
                </p>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 p-3 block w-full rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-3 block w-full rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 p-3 block w-full rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex justify-center items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-md transition"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
