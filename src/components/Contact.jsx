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

  const contactCards = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "surajpshinde8767@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
      href: "mailto:surajpshinde8767@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 8767027809",
      gradient: "from-purple-500 to-pink-500",
      href: "tel:+918767027809",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      value: "Chat with me directly on WhatsApp",
      gradient: "from-green-500 to-emerald-500",
      href: "https://wa.me/918767027809",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
    >
      <Toaster position="top-right" />

      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/15 dark:bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-600 dark:text-blue-400 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-[0_4px_12px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)] border border-white/50 dark:border-gray-700/50">
            📩 Get in touch
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind or just want to say hi? Drop me a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactCards.map((card, idx) => (
              <motion.a
                key={idx}
                href={card.href}
                target={card.title === "WhatsApp" ? "_blank" : undefined}
                rel={card.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                whileHover={{ y: -6, scale: 1.01 }}
                className="flex items-center gap-5 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/60 dark:border-gray-700/50 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_45px_rgba(99,102,241,0.2)] dark:hover:shadow-[0_20px_45px_rgba(99,102,241,0.15)] transition-shadow duration-300 cursor-pointer"
              >
                <div className="relative flex-shrink-0">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-30 blur-lg`} />
                  <div className={`relative w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-[0_8px_20px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.4)]`}>
                    {card.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    {card.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Decorative availability card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="relative rounded-3xl p-6 overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 dark:from-gray-950 dark:via-indigo-950 dark:to-black shadow-[0_15px_40px_rgba(79,70,229,0.3)]"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl" />
              <div className="relative flex items-center gap-3">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white/30"></span>
                </span>
                <p className="text-white font-medium">
                  Available for freelance & full-time opportunities
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/60 dark:border-gray-700/50 p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
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
                placeholder="Your name"
                className="p-3.5 block w-full rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-700/60 dark:text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] focus:ring-2 focus:ring-blue-500 focus:outline-none focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-shadow"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
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
                placeholder="you@example.com"
                className="p-3.5 block w-full rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-700/60 dark:text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] focus:ring-2 focus:ring-blue-500 focus:outline-none focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-shadow"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
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
                placeholder="Tell me about your project..."
                className="p-3.5 block w-full rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-700/60 dark:text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] focus:ring-2 focus:ring-blue-500 focus:outline-none focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-shadow resize-none"
              />
            </div>

            <motion.button
              whileHover={{ y: -3, boxShadow: "0 16px 32px rgba(37,99,235,0.4)" }}
              whileTap={{ y: 1, scale: 0.98 }}
              type="submit"
              className="w-full flex justify-center items-center px-6 py-3.5 bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold rounded-2xl shadow-[0_10px_24px_rgba(37,99,235,0.35),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all"
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