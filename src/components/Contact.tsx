import React from 'react'

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="py-12 md:py-24 bg-white dark:bg-gray-800"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Contact Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side: Contact Info & Map */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Contact Information
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Phone:</strong> +91 98765 43210
                  <br />
                  <strong>Email:</strong> youremail@example.com
                  <br />
                  <strong>Address:</strong> 123 Main Street, Your City, Your
                  State
                </p>
              </div>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-64 rounded-lg border"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019437428298!2d-122.41941508468165!3d37.77492977975827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2c75e2ff%3A0x95ed1e6d46b662c3!2sYour%20Shop%20Location!5e0!3m2!1sen!2sus!4v1610000000000"
                  allowFullScreen={true}
                  loading="lazy"
                  title="Map"
                ></iframe>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
