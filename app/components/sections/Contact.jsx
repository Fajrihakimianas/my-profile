"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { portfolioData } from "../../data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { email, phone, location } = portfolioData.personal;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      color: "text-blue-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: phone,
      href: `tel:${phone}`,
      color: "text-green-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: location,
      href: `https://maps.google.com/?q=${encodeURIComponent(location)}`,
      color: "text-red-500",
    },
  ];

  if (isSubmitted) {
    return (
      <Section
        id="contact"
        title="Thank You!"
        subtitle="Your message has been sent successfully. I'll get back to you soon!"
        background="gradient"
      >
        <div className="text-center">
          <CheckCircle className="mx-auto text-green-500 mb-6" size={80} />
          <Button variant="outline" onClick={() => setIsSubmitted(false)}>
            Send Another Message
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <Section
      id="contact"
      title="Let's Work Together"
      subtitle="Have a project in mind? I'd love to hear from you and discuss how we can bring your ideas to life."
      background="gradient"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              I'm always open to discussing new opportunities, creative
              projects, or potential collaborations. Whether you have a question
              or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <a
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel={
                    item.label === "Location"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center space-x-4 group"
                >
                  <div
                    className={`${item.color} bg-gray-50 p-3 rounded-full group-hover:scale-110 transition-transform duration-200`}
                  >
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">
                      {item.label}
                    </p>
                    <p className="text-gray-900 font-semibold">{item.value}</p>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          {/* Availability */}
          <Card className="p-6 bg-blue-50 border-blue-200">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <p className="text-blue-800 font-medium">
                Currently available for new projects
              </p>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                placeholder="Project Collaboration"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full group"
            >
              <Send
                className="mr-2 group-hover:translate-x-1 transition-transform duration-200"
                size={20}
              />
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}
