import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  MessageCircle,
  Send,
  User,
  AtSign,
  Phone,
  MapPin,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const whatsappMessage = `New message from ${formData.name} (${formData.email}): ${formData.message}`;
      const encodedWhatsAppMessage = encodeURIComponent(whatsappMessage);
      window.open(
        `https://wa.me/919226409449?text=${encodedWhatsAppMessage}`,
        "_blank"
      );

      const emailSubject = `New message from ${formData.name}`;
      const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
      window.open(
        `mailto:monubawane21@gmail.com?subject=${encodeURIComponent(
          emailSubject
        )}&body=${emailBody}`
      );

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="container mx-auto px-6 py-8 bg-gradient-to-b from-indigo-50 to-white">
      <div className="flex items-center justify-center mb-12">
        <div className="relative">
          <h2 className="text-4xl font-bold text-center text-gray-800">
            Get In Touch
          </h2>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-500 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 overflow-hidden rounded-2xl shadow-2xl">
          {/* Contact Info */}
          <div className="lg:w-2/5 bg-gradient-to-br from-indigo-600 to-purple-600 p-8 text-white relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-12 -mb-12"></div>

            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Phone className="mr-3" size={24} />
              Contact Information
            </h3>

            <div className="space-y-6 relative z-10">
              <div className="flex items-start hover:translate-x-2 transition-all duration-300">
                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                  <Mail className="text-gray-500" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-100 text-sm">Email</h4>
                  <a
                    href="mailto:monubawane21@gmail.com"
                    className="text-white hover:underline text-lg"
                  >
                    monubawane21@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start hover:translate-x-2 transition-all duration-300">
                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                  <MessageCircle className="text-gray-500" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-100 text-sm">
                    WhatsApp
                  </h4>
                  <a
                    href="https://wa.me/918087727262"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline text-lg"
                  >
                    +91 9226409449
                  </a>
                </div>
              </div>

              <div className="flex items-start hover:translate-x-2 transition-all duration-300">
                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                  <Linkedin className="text-gray-500" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-100 text-sm">
                    LinkedIn
                  </h4>
                  <a
                    href="https://www.linkedin.com/in/monali-bawane-99bb892a7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline text-lg"
                  >
                    Connect with me
                  </a>
                </div>
              </div>

              <div className="flex items-start hover:translate-x-2 transition-all duration-300">
                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                  <MapPin className="text-gray-500" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-100 text-sm">
                    Location
                  </h4>
                  <p className="text-white text-lg">
                    Nagpur, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white bg-opacity-10 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-black flex items-center">
                <Send className="mr-2 text-black-500" size={18} />
                Let's Work Together
              </h3>
              <p className="text-gray-500">
                I'm open to new opportunities and collaborations. Whether you
                have a project or want to chat about web development, reach out!
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-3/5 bg-white p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Send a Message
            </h3>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl flex flex-col items-center justify-center h-80">
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <Send className="text-green-600" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p className="text-center">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <AtSign size={18} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <MessageCircle size={18} />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:shadow-lg transform hover:-translate-y-1"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
