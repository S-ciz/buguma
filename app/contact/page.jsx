"use client";

import { useState, useRef } from "react";
import { ScrollAnimatedSection } from "../components/ScrollObserver";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      );
      console.log("SUCCESS");
    } catch (err) {
      console.log(err);
    } finally {
      // Simulate form submission
      setTimeout(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setLoading(false);

        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "bugumasouthafrica1@gmail.com",
      link: "mailto:bugumasouthafrica1@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+27 81 375 6297",
      link: "tel:+27813756297",
    },
    {
      icon: "📍",
      title: "Address",
      value: "1 Wyndcliff Road, Lorentzville, Johannesburg 2094, South Africa",
      link: "#",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-700 text-white pt-32 pb-16">
        <div className="container-custom text-center">
          <ScrollAnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-2xl text-gray-100 max-w-3xl mx-auto">
              Have questions? Want to partner with us? Let's talk.
            </p>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <ScrollAnimatedSection
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg card-hover text-center"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <a
                  href={info.link}
                  className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                >
                  {info.value}
                </a>
              </ScrollAnimatedSection>
            ))}
          </div>

          {/* Social Links */}
          <ScrollAnimatedSection className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h2>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.facebook.com/p/Buguma-South-Africa-100057553282763/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/buguma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="YouTube"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.5 6.2s-.2-1.7-.9-2.5c-.8-.9-1.7-.9-2.1-1C16.8 2.3 12 2.3 12 2.3h-.1s-4.8 0-8.5.4c-.4 0-1.3 0-2.1 1-.7.8-.9 2.5-.9 2.5S0 8.2 0 10.2v1.6c0 2 .1 4 .1 4s.2 1.7.9 2.5c.8.9 1.8.9 2.3 1 1.7.2 7.2.4 8.7.4h.3c1.5 0 7-.2 8.7-.4.4 0 1.5 0 2.3-1 .7-.8.9-2.5.9-2.5s.1-2 .1-4v-1.6c0-2-.1-4-.1-4zM9.6 14.7V7.3l6.2 3.7-6.2 3.7z" />
                </svg>
              </a>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimatedSection className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Send Us a Message
            </h2>

            {submitted && (
              <div className="mb-8 p-6 bg-green-100 border-l-4 border-green-500 rounded-lg animate-fade-in">
                <h3 className="text-lg font-bold text-green-700 mb-2">
                  ✓ Message Sent!
                </h3>
                <p className="text-green-600">
                  Thank you for reaching out. We'll get back to you as soon as
                  possible.
                </p>
              </div>
            )}

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="title"
                  // value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your message..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full btn-primary text-lg py-4 font-bold disabled:opacity-70 disabled:cursor-not-allowed transition-all ${
                  loading ? "opacity-70" : ""
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Response Time Info */}
      <section className="section-padding bg-blue-50 border-t-4 border-primary-500">
        <div className="container-custom">
          <ScrollAnimatedSection className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ⏱️ Response Time
            </h3>
            <p className="text-gray-700 mb-4">
              We typically respond to inquiries within 24-48 hours during
              business days. For urgent matters, please call us directly.
            </p>
            <p className="text-gray-600 italic">
              Our team is committed to supporting you with any questions about
              our work, programs, or how you can help.
            </p>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quick Answers
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about BUGUMA and how to get involved.
            </p>
          </ScrollAnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How can I volunteer with BUGUMA?",
                a: "Contact us to discuss volunteering opportunities that match your skills. We welcome volunteers across all program areas.",
              },
              {
                q: "How do I refer a refugee in need?",
                a: "Please reach out with the person's details and we'll discuss how we can support them.",
              },
              {
                q: "Can I sponsor a specific program?",
                a: "Yes! Many donors choose to sponsor specific programs. Contact us to discuss program sponsorship.",
              },
              {
                q: "Do you accept in-kind donations?",
                a: "We do accept donations of goods and services. Please contact us first to discuss what we currently need.",
              },
            ].map((faq, index) => (
              <ScrollAnimatedSection
                key={index}
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-700">{faq.a}</p>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <ScrollAnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Make a Difference Together
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
              Whether you want to donate, volunteer, or partner with us, we're
              excited to connect with you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-all inline-block"
              >
                Make a Donation
              </Link>
              <a
                href="tel:+27813756297"
                className="px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-400 transition-all border-2 border-white inline-block"
              >
                Call Us Now
              </a>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>
    </>
  );
}
