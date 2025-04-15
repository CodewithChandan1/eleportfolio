import { Facebook, Instagram, Linkedin, Phone } from 'lucide-react';
import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-8">
        {/* Social Media Section */}
        <section className="py-8  ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Facebook className="w-8 h-8" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-pink-600 dark:hover:text-pink-400"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Linkedin className="w-8 h-8" />
              </a>

              <a
                href="tel:+1234567890"
                className=" hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Phone className="w-8 h-8" />
              </a>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 John's Electrical. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
