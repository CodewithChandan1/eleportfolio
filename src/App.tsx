import {  Shield,  Zap,  MessageCircle, Clock,  } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import type {  Offer } from './types';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonial';
import Projectsection from './components/Projectsection';
import Videosection from './components/Videosection';
import Sevices from './components/Sevices';
import Shop from './components/Shop';






const offers: Offer[] = [
  {
    title: "Diwali Special Offer",
    description:
      "Get 20% off on all electrical installations and free safety inspection",
    discount: "20% OFF",
    validUntil: "November 30, 2025",
    image: "https://images.unsplash.com/photo-1577083288073-40892c0860a4",
  },
  {
    title: "Summer Safety Package",
    description: "Complete electrical safety audit at 30% discount",
    discount: "30% OFF",
    validUntil: "August 31, 2025",
    image: "https://images.unsplash.com/photo-1577083288073-40892c0860a4",
  },
];



function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />

        {/* Hero Section */}
        <section id="home" className="pt-20 pb-12 md:pt-32 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Electrical Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
                25+ years of experience delivering reliable and safe electrical
                solutions
              </p>
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-12 md:py-24 bg-white dark:bg-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  About Us
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  With over 25 years of experience in the electrical industry,
                  we've built our reputation on reliability, expertise, and
                  exceptional customer service. Our team of certified
                  electricians is committed to delivering safe and innovative
                  electrical solutions for homes and businesses.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Zap className="w-6 h-6 text-blue-600 mr-2" />
                    <span>Licensed and Insured Professionals</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-6 h-6 text-blue-600 mr-2" />
                    <span>100% Safety Guaranteed</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-6 h-6 text-blue-600 mr-2" />
                    <span>24/7 Emergency Service</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-96">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
                  alt="Electrician at work"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Video Showcase */}
        <Videosection />

        {/* Services Section */}
        <Sevices/>

        {/* Shop Section */}
        <Shop/>

        {/* Projects Section */}
        <Projectsection />

        {/* Certifications Section */}
        <section id="certifications" className="py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Certifications & Licenses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Professional Certifications
                </h3>
                <ul className="space-y-3">
                  <li>• Master Electrician License</li>
                  <li>• Certified Solar PV Installer</li>
                  <li>• Energy Management Certification</li>
                  <li>• Safety Compliance Certificate</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Industry Memberships
                </h3>
                <ul className="space-y-3">
                  <li>• National Electrical Contractors Association</li>
                  <li>• Certified Energy Professional</li>
                  <li>• Solar Energy Industries Association</li>
                  <li>• State Electrical Board Member</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Pricing Section */}
        <Pricing />

        {/* Contact Section */}
        <Contact />

        {/* Special Offers Section */}
        <section
          id="offers"
          className="py-12 md:py-24 bg-white dark:bg-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Special Offers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offers.map((offer) => (
                <div
                  key={offer.title}
                  className="relative overflow-hidden rounded-lg shadow-lg"
                >
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent">
                    <div className="absolute bottom-0 p-6 text-white">
                      <div className="inline-block bg-red-600 px-4 py-2 rounded-full text-lg font-bold mb-3">
                        {offer.discount}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                      <p className="mb-2">{offer.description}</p>
                      <p className="text-sm">Valid until: {offer.validUntil}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />

        {/* Fixed WhatsApp Button */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 whatsapp-pulse"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </ThemeProvider>
  );
}

export default App;