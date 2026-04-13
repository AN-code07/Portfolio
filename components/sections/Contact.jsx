"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "nawaz51412@gmail.com",
      href: "mailto:nawaz51412@gmail.com",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+92-314-8084741",
      href: "tel:+923148084741",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Pakistan / Available Worldwide",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/allah-nawaz", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/allah-nawaz-mern", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="bg-[#000319]">
      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#04071D] via-[#1a0f3d] to-[#04071D] py-24 md:py-32">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CBACF9] rounded-full blur-[300px] opacity-[0.05]"></div>

        <div data-reveal className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#CBACF9]/10 border border-[#CBACF9]/20 rounded-full px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-sm text-gray-300">Currently accepting new projects</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to bring your{" "}
            <span className="gradient-text">vision to life?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let&apos;s collaborate on something extraordinary. I&apos;ll turn your ideas
            into polished, production-ready solutions.
          </p>
          <button
            onClick={() => {
              const form = document.getElementById("contact-form");
              if (form) {
                form.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }}
            className="px-10 py-4 text-lg bg-gradient-to-r from-[#CBACF9] to-[#8A6CF4] text-white font-semibold rounded-xl shadow-lg hover:shadow-[#CBACF9]/30 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
          >
            Start a Conversation
            <FaPaperPlane className="text-sm" />
          </button>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div data-reveal="left" className="space-y-8">
              <div>
                <p className="text-[#CBACF9] text-sm font-medium tracking-widest uppercase mb-3">
                  Get in Touch
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Let&apos;s Talk
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  I&apos;m always interested in new opportunities and exciting projects.
                  Whether you have a question or just want to say hi, I&apos;ll try my
                  best to get back to you within 24 hours.
                </p>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-3 p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-400 text-lg">&#9889;</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Fast Response</p>
                  <p className="text-gray-500 text-xs">Usually responds within a few hours</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center space-x-4 p-4 bg-[#0C0E23] rounded-xl border border-[#141b4e] transition-all duration-300 hover:bg-[#111432] hover:border-[#CBACF9]/30 hover:-translate-y-0.5 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#CBACF9]/20 to-[#8A6CF4]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-[#CBACF9]/30 group-hover:to-[#8A6CF4]/30 transition-all duration-300">
                        <Icon className="text-[#CBACF9] text-lg" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm">
                          {info.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a key={index} href={info.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">
                  Follow Me
                </h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 bg-[#0C0E23] border border-[#141b4e] rounded-xl flex items-center justify-center text-gray-400 hover:text-[#CBACF9] hover:border-[#CBACF9]/30 hover:-translate-y-0.5 transition-all duration-300"
                        aria-label={social.label}
                      >
                        <Icon className="text-lg" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              id="contact-form"
              data-reveal="right"
              data-reveal-delay="150"
              className="bg-[#0C0E23] p-8 md:p-10 rounded-2xl border border-[#141b4e] relative overflow-hidden"
            >
              {/* Subtle corner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#CBACF9] rounded-full blur-[100px] opacity-[0.05]"></div>

              <h2 className="text-2xl font-semibold text-white mb-2">
                Send a Message
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Fill out the form below and I&apos;ll get back to you shortly.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                  <p className="text-emerald-400 text-sm font-medium">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider"
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
                      className="w-full px-4 py-3 bg-[#04071D] border border-[#141b4e] rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#CBACF9]/50 focus:ring-1 focus:ring-[#CBACF9]/20 transition-all duration-300 text-sm"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider"
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
                      className="w-full px-4 py-3 bg-[#04071D] border border-[#141b4e] rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#CBACF9]/50 focus:ring-1 focus:ring-[#CBACF9]/20 transition-all duration-300 text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#04071D] border border-[#141b4e] rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#CBACF9]/50 focus:ring-1 focus:ring-[#CBACF9]/20 transition-all duration-300 text-sm"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#04071D] border border-[#141b4e] rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#CBACF9]/50 focus:ring-1 focus:ring-[#CBACF9]/20 transition-all duration-300 resize-none text-sm"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3.5 bg-gradient-to-r from-[#CBACF9] to-[#8A6CF4] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#CBACF9]/20 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="text-xs" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
